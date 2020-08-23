var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function (req, res, next) {
  console.log('post method');
  let body = '';
  req.on('data', data => {
    console.log('on data');
    body += data;
    console.log(data);
    // console.log(data);
  })
  req.on('end', () => {
    console.log('request end')
  });
  res.end();
  // fs.writeFileSync("../server/public/" + req.query.filename, req.body.content);
  // res.send("hello world");
});

module.exports = router;
