const express = require('express');
const path = require('path');

const app = express();

app.use('/js', express.static(path.join(__dirname, '../index.js')))
app.use('/resources/remix.mp3', express.static(path.join(__dirname, '../resources/remix.mp3')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.js'));
});

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/resources/zig.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/zig.png'));
});

app.get('/resources/remix.mp3', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/remix.mp3'));
});

app.get('/resources/woman.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/woman.png'));
});

app.get('/resources/evil_king.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/evil_king.png'));
});

app.get('/resources/download.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/download.png'));
});

app.get('/resources/free_minecraft.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/free_minecraft.png'));
});

app.get('/resources/white_pharaoh.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/white_pharaoh.png'));
});

app.get('/resources/spaceballs_chapter_12.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/spaceballs_chapter_12.png'));
});

app.get('/resources/yair_davidiy.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/yair_davidiy.png'));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {console.log(`COMLINK ${port} ESTABLISHED. AWAITING ORDERS`)});