const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const archiver = require('archiver');

var output = fs.createWriteStream(__dirname + '/package.zip');
let filename = './package/cat.jpg';
const packname = './package'

// fs.stat(filename, (error, stat) => {
    
const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=' + 'package.zip',
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/octet-stream',
        // 'Content-Length': stat.size
    }
};

const req = http.request(options, res => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

// let readStream = fs.createReadStream(filename);
// readStream.pipe(req);

// readStream.on('end', () => {
//     req.end();
// });
let archive = archiver('zip', {
    zlib: { level: 9 }
});
archive.directory(packname, false);
// archive.pipe(output);
archive.finalize();
archive.pipe(req);


archive.on('end', () => {
    req.end();
})

// });

const postData = querystring.stringify({
    'content': 'Hello world 2333'
});
