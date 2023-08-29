const express = require("express");
const app = express.Router();
const Path = require("path");
const bodyParser = require("body-parser");

const dbService = require("./dbService");


app.use(express.static(Path.resolve(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {

    const index = Path.resolve(__dirname, "public", "index.html");
    res.sendFile(index);

})


app.post("/", (req, res) => {

    const name = req.body.name;
    const songLink = req.body.songLink;
    const songName = req.body.songName;

    dbService.saveSong(songName, songLink, name);


    res.redirect("/enviado");
})

app.get("/enviado", (req, res) => {

    const enviado = Path.resolve(__dirname, "public", "enviado.html");
    res.sendFile(enviado);
})

module.exports = app;