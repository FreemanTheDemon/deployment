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

app.get('/resources/free_minecraft.gif', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/free_minecraft.gif'));
});

app.get('/resources/white_pharoh.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/white_pharoh.png'));
});

app.get('/resources/spaceballs_chapter_12.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/spaceballs_chapter_12.png'));
});

app.get('/resources/yair_davidiy.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/yair_davidiy.png'));
});

app.get('/resources/warlord_YHWH.PNG', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/warlord_YHWH.PNG'));
});

app.get('/resources/spock1.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/spock1.png'));
});

app.get('/resources/dwarf_mining.gif', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/dwarf_mining.gif'));
});

app.get('/resources/america_vs_europe.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../resources/america_vs_europe.png'));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {console.log(`COMLINK ${port} ESTABLISHED. AWAITING ORDERS`)});