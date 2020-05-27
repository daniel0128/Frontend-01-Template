let iframe = document.createElement('iframe');
document.body.innerHTML = '';
document.body.appendChild(iframe);

function happen(element, event) {
    return new Promise((resolve) => {
        let handler = () => {
            resolve();
            element.removeEventListener(event, handler);
        }
        element.addEventListener(event, handler);
    })
}

void (async function() {
    for (let standard of standards) {
        iframe.src = standard.url;
        await happen(iframe, 'load');
    }
})();

//-------------------------------
// happen(document.body, 'click').then()
// iframe.src = 'https://www.w3.org/TR/2020/WD-css-position-3-20200519';

// iframe.contentDocument.getElementsByClassName('prod');