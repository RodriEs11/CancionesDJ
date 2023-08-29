const express = require("express");
const app = express();
const Path = require("path");
const bodyParser = require("body-parser");

const dbService = require("./dbService");
const db = require("./dbConfig");
const spotifyDownloader = require("./spotifyDownloader");

app.set("view engine", "ejs");
app.use(express.static(Path.resolve(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/admin", (req, res) => {

    const admin = Path.resolve(__dirname, "public", "admin.ejs");

    let songs = dbService.getSongs();

    songs.then(data => {
        res.render(admin, {
            songs: data
        })
        
    })
    
})

app.get("/download", (req, res) => {
    
    //download?q=<url>
    const url = req.query.q;
    const downloadPath = __dirname+ "/downloads";
    spotifyDownloader.download(url, downloadPath);

    res.redirect("/admin");


})


module.exports = app;