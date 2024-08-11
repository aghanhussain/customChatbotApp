// lets create a express server
const express = require("express");
var ejs = require('ejs');


var app = express();
app.use(express.static("public"))
app.set("view engine", "ejs");

app.listen(3000, function () {
    console.log("server is running on port 3000");
})



app.get("/", function (req, res) {
    res.render("pages/index");
})