let dragable = document.getElementById("dragable");
let ranges = [];
let baseX = 0, baseY = 0;


dragable.addEventListener("mousedown", event => {
    document.addEventListener("selectstart", event => event.preventDefault())
    let [startX, startY] = [event.clientX, event.clientY];
    let move = event => {
        let range= nearest(event.clientX, event.clientY)
        range.insertNode(dragable)
        // let x = baseX + event.clientX - startX;
        // let y = baseY + event.clientY - startY;
        // dragable.style.transform = `translate(${x}px, ${y}px)`;
        // console.log(event)
    }
    let up = event => {
        baseX = baseX + event.clientX - startX;
        baseY = baseY + event.clientY - startY;
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up)
    }
    document.addEventListener("mousemove", move)
    document.addEventListener("mouseup", up)
})

let container = document.getElementById("container");

for (let i = 0; i < container.childNodes[0].textContent.length; i++) {
    let range = document.createRange();
    range.setStart(container.childNodes[0], i);
    range.setEnd(container.childNodes[0], i);
    // console.log(range.getBoundingClientRect())
    ranges.push(range);
}

function nearest(x0, y0) {
    let nearestRange = null;
    let distance = Infinity;
    for (let range of ranges) {
        let {x, y} = range.getBoundingClientRect();
        let d = (x0 - x)**2 + (y0 - y) ** 2
        if (d < distance) {
            nearestRange = range;
            distance = d;
        }
    }
    return nearestRange
}