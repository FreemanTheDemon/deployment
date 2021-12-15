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

app.get('/resources/:name', function(req, res) {
    res.sendFile(path.join(__dirname, `/resources/${req.params.name}`));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {console.log(`COMLINK ${port} ESTABLISHED. AWAITING ORDERS`)});