const compression = require('compression');
const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const base_dir = path.resolve(__dirname, '..');
const build_dir = path.join(base_dir, 'build');

const HTTP_POST = process.env.PORT || 8080;
const HTTPS_PORT = 8443;

let app = express();

https.createServer({
    key: fs.readFileSync('server/key.pem'),
    cert: fs.readFileSync('server/cert.pem')
}, app).listen(HTTPS_PORT, function () {
    console.log('Running @ https://localhost:' + HTTPS_PORT);
});

app.use(express.static(build_dir));

app.get('*', function (req, res) {
    res.sendFile(path.join(build_dir, 'index.html'));
});

app.listen(HTTP_POST, function () {
    console.log('Running @ http://localhost:' + HTTP_POST);
});