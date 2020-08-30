# Weekly Summary for Week 20
## phantomjs
headless browser
### Install
download and move the executable file to PATH  
### Usage
create hello.js and put following codes in:  
```js
var page = require("webpage").create();
page.open("http://baidu.com", function (status) {
  console.log("Status: " + status);
  if (status === "success") {
    page.render("./baidu.png"); // 将http://baidu.com生成一个baidu.png图片
  }
  phantom.exit();
});
```
run  
```shell
phantomjs hello.js
```

## OAuth
Github OAuth as an example  
1. Register an App on github.com  
2. Add Codes for access_token
3. Add Codes for user_information
Integrate with Publisher  
