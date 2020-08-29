console.log('hello world');

var page = require('webpage').create();
var localPage = 'file:///Users/SWZhang/Projects/AfterWork/Frontend-01-Template/week19/demo/dist/index.html'
// 'http://localhost:8080/'
page.open(localPage, function (status) {
    console.log('Status: '+ status)
    if (status === 'success') {
        // console.log('rendering')
        // page.render('./baidu.png');
        var body = page.evaluate(function() {
            var toString = function(pad, element) {
                var children = element.childNodes;
                var childrenStr = '';
                for (var i = 0; i< children.length; i++) {
                    childrenStr +=toString("  " + pad, children[i])
                }
                var name = element.tagName || element.textContent;
                return pad + name + "\n" + childrenStr;
            }
            return toString("", document.body);
        })
        console.log(body);
    }
    phantom.exit();
});