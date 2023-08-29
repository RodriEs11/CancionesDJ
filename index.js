const express = require("express")
const app = express();
const PORT = 3000;

const dbConfig = require("./dbConfig");

app.use(express.static(__dirname));
app.use(require("./client"));
app.use(require("./admin"));


app.listen(PORT, () => {
    console.log(`App running: https://localhost:${PORT}`);
});

module.exports = app;