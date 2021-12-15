const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.js'));
});

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/zig', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/zig.png'));
});

app.get('/remix', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/remix.mp3'));
});

app.get('/woman', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/woman.png'));
});

app.get('/evil_king', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/evil_king.png'));
});

app.get('/download', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/download.png'));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {console.log(`COMLINK ${port} ESTABLISHED. AWAITING ORDERS`)});