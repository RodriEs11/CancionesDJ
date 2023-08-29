const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("database.db");


const sql = `
CREATE TABLE IF NOT EXISTS cancion (
  idCancion INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(45) NULL,
  link VARCHAR(200) NULL,
  emisor VARCHAR(45) NULL,
  timestamp DATETIME NOT NULL
)`

 db.run(sql)


module.exports = db;

