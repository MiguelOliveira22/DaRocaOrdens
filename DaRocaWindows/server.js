// server.js

const express = require('express');

const server = express();

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/site/login.html", (err) => {
        if(err){
            console.error(err);
            res.status(404).end();
        }
        else{
            console.log("Executou");
        }
    });
});

server.get("/main", (req, res) => {
    res.sendFile(__dirname + "/site/main.html", (err) => {
        if(err){
            console.error(err);
            res.status(404).end();
        }
        else{
            console.log("Executou");
        }
    });
});

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/site/main.html", (err) => {
        if(err){
            console.error(err);
            res.status(404).end();
        }
        else{
            console.log("Executou");
        }
    });
});

server.listen(80, "177.220.18.101", () => {
    console.log("Start");
})