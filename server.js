var express = require("express");
var path = require('path');
var app = express();
var PORT = 3000;
//----

//------Routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "indopakaddres.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "indopakdisres.html"));
});

//-----test

// app.get("/", function(req, res) {
//   res.send("Welcome to the IndoPak Restaurant!");
// });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});