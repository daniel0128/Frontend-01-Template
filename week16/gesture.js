function enableGesture(element) {

    let context = Object.create(null);

    let MOUSE_SYMBOL = Symbol('mouse');



    element.addEventListener('mousedown', event => {
        context[MOUSE_SYMBOL] = Object.create(null);

        start();

        
    });

    element.addEventListener('mouseup', event => {

    })

    element.addEventListener('touchstart', event => {
        for (let touch of event.changedTouches) {
            context[touch.identifier] = Object.create(null);
            start(touch, context[touch.identifier]);
        }
    })

    element.addEventListener('touchcancel', event => {

    })

    //tap

    // pan- panstart panmove panend

    //flick

    // press - pressstart pressend

    let start = (point, context) => {
        element.dispatchEvent(new CustomEvent('start', {
            startX: point.clientX,
            startY: point.clientY,
            clientX: point.clientX,
            clientY: point.clientY
        }))
        context.startX = point.clientX;
        context.startY = point.clientY;

        context.moves = [];

        console.log('start', point.clientX, point.clientY);
    }

    let move = (point) => {
        let dx = point.clientX - context.startX;
        let dy = point.clientY - context.startY;

        if (dx ** 2 + dy ** 2 > 100 && !context.isPan) {
            if (context.isPress) {
                console.log('press cancel')
            }
            context.isTap = false;
            context.isPan = true;
            context.isPress = false;
            console.log('panstart');

        }

        if (context.isPan) {
            context.moves.push({
                dx,
                dy,
                t: Date.now()
            });

            context.moves = context.moves.filter(record => Date.now() - record.t < 300)
            console.log('pan');
        }
        console.log('move')
    }

    let end = (point, context) => {
        if (context.isPan) {
            let dx = point.clientX - context.startX;
            let dy = point.clientY - context.startY;
            let record = context.moves[0]
            let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t)
            if (speed > 2.5) {
                console.log('flick');
            }
            element.dispatchEvent(new CustomEvent('panend', {}));
        }
        if (context.isTap) {
            element.dispatchEvent(new CustomEvent('tap', {}))
        }
        if (context.isPress) {
            element.dispatchEvent(new CustomEvent('press'))
        }

        clearTimeout(context.timeoutHandler);
    }

    let cancel = (point, context) => {

    }
}