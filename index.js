const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const DB = new Map();
const app = express();

app.use(express.static("public"));
app.use(cookieParser());
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/finder.html", function(req, res) {
    res.sendFile(__dirname + "/public/finder.html");
});
app.get("/loster.html", function(req, res) {
    res.sendFile(__dirname + "/public/loster.html");
});





const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log("Server ready in port: " + PORT);
});