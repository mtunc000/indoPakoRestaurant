var express = require("express");
var path = require('path');
var app = express();
var PORT = 3000;
//----

//------
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "indopakaddres.html"));
  });

  app.get("/reservationlist", function(req, res) {
    res.sendFile(path.join(__dirname, "indopakdisres.html"));
  });
//-----

  // app.get("/", function(req, res) {
  //   res.send("Welcome to the IndoPak Restaurant!");
  // });
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });