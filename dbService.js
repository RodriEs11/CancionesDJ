const Path = require("path");
const db = require("./dbConfig");
const { callbackify } = require("util");


function saveSong(songName, songLink, name) {

    const timestamp = new Date(Date.now()).toLocaleString();

    const sql = `INSERT INTO cancion (nombre, link, emisor, timestamp)
        VALUES ('${songName}', '${songLink}', '${name}', '${timestamp}')`
    db.run(sql);
    console.log("Canción agregada a la base de datos en DBSERVICE");


}

function getSongs(callback){


    return new Promise( (resolve, reject) => {
        db.all('SELECT * FROM cancion', (err, rows) => {
            if(err){
                console.error(err);
                return;
            }else{
                resolve(rows);
            }
         
        })
    
    })
    

}

module.exports = { saveSong, getSongs};