let handlers = new Map();
let reactivities = new Map();

let usedReactivities = [];

let object = {
    a: {X: 1},
    b: 2
}

function reactive(obj) {
    if (reactivities.has(obj)) {
        return reactivities.get(obj)
    }

    let proxy = new Proxy(obj, {
        get(obj, prop) {
            // console.log(obj, prop);
            usedReactivities.push([obj, prop])
            if (typeof obj[prop] === 'object') {
                return reactive(obj[prop])
            }
            return obj[prop]
        },
        set (obj, prop, val) {
            obj[prop] = val
            // console.log(handlers)
            if (handlers.get(obj) && handlers.get(obj).get(prop)) {
                for (let handler of handlers.get(obj).get(prop)) {
                    handler()
                }
            }
            return obj[prop];
        } 
    })

    reactivities.set(obj. proxy);
    reactivities.set(proxy, proxy);

    return proxy;
}

function effect(handler) {
    usedReactivities = []
    handler()
    // handlers.push(handler)
    // console.log(usedReactivities)
    for (let usedReactivity of usedReactivities) {
        let [obj, prop] = usedReactivity;
        // console.log([obj, prop])
        if (!handlers.has(obj)) {
            handlers.set(obj, new Map());
        }

        if (!handlers.get(obj).has(prop)) {
            handlers.get(obj).set(prop, [])
        }

        handlers.get(obj).get(prop).push(handler)
    }
}

// let dummy;
// let proxy = reactive(object)
// effect (() => dummy = proxy.a)
// console.log(dummy)
// proxy.a = 2

// let p1 = reactive({a: 1})
// let p2 = reactive({a: 2})
// let v12, v1, v2;

// effect(() => v12 = p1.a + p2.a)
// effect(() => v1 = p1.a)
// effect(() => v2 = p2.a);

// console.log(dummy)
