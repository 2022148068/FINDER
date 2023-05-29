const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const request = require("request");
const DB = new Map();
const app = express();
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");


app.use(express.static("public"));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/finder.html", function(req, res) {
    res.sendFile(__dirname + "/public/finder.html");
});
app.get("/loster.html", function(req, res) {
    res.sendFile(__dirname + "/public/loster.html");
});
app.get("/complete.html", function(req, res) {
    res.sendFile(__dirname + "/public/complete.html");
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log("Server on. http://localhost:" + PORT);
});