const express = require('express');
const fs = require('fs');
const { videoPaths } = require('./paths');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send(`
    <style> a { margin: auto; } </style>
    <a href="http://localhost:${port}/video?video=sintel">CLICK ME TO SEE A COOL VIDEO WITH DRAGONS</a><br>
    <a href="http://localhost:${port}/video?video=birds">CLICK ME TO SEE A COOL VIDEO WITH REALLY TRANQUIL BIRDS</a><br>
    <a href="http://localhost:${port}/video?video=rockets">CLICK ME TO SEE A COOL VIDEO THAT IS ASTRO-'NUTS' OUT OF THIS WORLD (pun intended)</a>
    `);
});

app.get('/video', (req, res) => {
    res.send(`<video controls width="1280" height="720"><source src="http://localhost:${port}/${req.query.video}" type="video/mp4"></video>`);
});

app.get('/sintel', (req, res) => {
    const path = videoPaths.sintel;
    const fileStats = fs.statSync(path);
    const fileSize = fileStats.size;

    console.log("STATS: ");
    console.log(fileStats);

    const header = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    }
    res.writeHead(200, header);
    fs.createReadStream(path).pipe(res);
});

app.get('/birds', (req, res) => {
    const path = videoPaths.birds;
    const fileStats = fs.statSync(path);
    const fileSize = fileStats.size;

    console.log("STATS: ");
    console.log(fileStats);

    const header = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    }
    res.writeHead(200, header);
    fs.createReadStream(path).pipe(res);
});

app.get('/rockets', (req, res) => {
    const path = videoPaths.rockets;
    const fileStats = fs.statSync(path);
    const fileSize = fileStats.size;

    console.log("STATS: ");
    console.log(fileStats);

    const header = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    }
    res.writeHead(200, header);
    fs.createReadStream(path).pipe(res);
});

app.listen(port, () => {console.log("started")});