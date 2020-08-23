const http = require('http');
const fs = require('fs');
const unzip = require('unzipper');

const server = http.createServer((req, res) => {

    // let matched = req.url.match(/filename=([^&]+)/);
    // const filename = matched && matched[1];
    // if (!filename) {
    //     res.end();
    // }
    // let writeStream = fs.createWriteStream('../server/packages/package');

    let writeStream = unzip.Extract({path: '../server/public/'})
    req.pipe(writeStream);

    // equivelent to:
    // req.on('data', chunk => {
    //     writeStream.write(chunk);
    // });
    // req.on('end', chunk => {
    //     writeStream.end(chunk);
    // });

    req.on('end', ()=> {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('okay');
    });
});

server.listen(8081);