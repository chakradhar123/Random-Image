"use strict";

var express = require('express'),
    app = express();
app.use(express.static("./"));
app.use(express.static("./js"));
app.get('/', function (req, res) {
    res.sendFile("Home.html", { root: "./" });
});
var port = process.env.PORT ? process.env.PORT : 5000;
app.listen(port, function () {
    console.log("server started");
});