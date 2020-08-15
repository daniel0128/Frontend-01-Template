class Timeline {
    constructor() {
        this.animations = [];
        this.requestID = null;
        this.state = 'init';
        this.tick = () => {

            let t = Date.now() - this.startTime;
            let animations = this.animations.filter(a => !a.finished)
            for (let animation of animations) {
                let { object, property, start, end, template, duration, timingFunction, delay, addTime } = animation;

                let progression = timingFunction((t - delay - addTime) / duration);
                if (t > duration + delay + addTime) {
                    progression = 1;
                    animation.finished = true;
                }
                let value = animation.valueFromProgression(progression)

                object[property] = template(value);
            }
            // console.log('tick')
            // requestAnimationFrame(this.tick)
            if (animations.length) {
                this.requestID = requestAnimationFrame(this.tick)
            }
        }
    }

    pause() {
        if (this.state !== 'playing') {
            return
        }
        this.state = 'pause'
        this.pauseTime = Date.now();
        cancelAnimationFrame(this.requestID)
    }

    resume() {
        if (this.state !== 'pause') {
            return
        }
        this.state = 'playing'
        this.startTime += Date.now() - this.pauseTime;
        this.tick()
    }

    start() {
        if (this.state !== 'init') {
            return;
        }
        this.state = 'playing'
        this.startTime = Date.now()
        this.tick()
    }

    restart() {
        if (this.state === 'playing') {
            this.pause();
        }
        this.animations = [];
        this.requestID = null;
        this.state = 'init';
        this.pauseTime = null;
        this.start();
        // this.startTime = 
    }

    add(animation, addTime) {
        animation.finished = false;
        this.animations.push(animation);
        if (this.state === 'playing') {
            animation.addTime = addTime !== void 0 ? addTime : Date.now() - this.startTime;
        } else {
            animation.addTime = addTime !== void 0 ? addTime : 0;
        }
    }
}

class Animation {
    constructor(object, property, start, end, duration, delay, timingFunction, template) {
        this.object = object;
        this.property = property;
        this.template = template;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay || 0;
        this.timingFunction = timingFunction;
    }

    valueFromProgression(progression) {
        return this.start + progression * (this.end - this.start)
    }
}

class ColorAnimation {
    constructor(object, property, start, end, duration, delay, timingFunction, template) {
        this.object = object;
        this.property = property;
        this.template = template || (v => `rgba(${v.r},${v.g},${v.b},${v.a})`);
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay || 0;
        this.timingFunction = timingFunction;
    }

    valueFromProgression(progression) {
        return {
            r:this.start.r + progression * (this.end.r - this.start.r),
            g:this.start.g + progression * (this.end.g - this.start.g),
            b:this.start.b + progression * (this.end.b - this.start.b),
            a:this.start.a + progression * (this.end.a - this.start.a),
        }
    }
}

/**
 *
 * let animation = new Animation(object, property, start, end, duration, delay, timingFunction)
 * let animation2 = new Animation(object, property, start, end, duration, delay, timingFunction)
 *
 * let timeline = new Timeline()
 *
 * timeline.add(animation)
 * timeline.add(animation2)
 *
 * timeline.start()
 * timeline.pause()
 * timeline.resume()
 * timeline.stop()
 *
 *
 * timing function:
 * progression = f(time)
 *
 */