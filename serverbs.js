// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservations (DATA)
// =============================================================
let reservations = [
  {
    routeName: "yoda",
    name: "Yoda",
    phone: "512-555-1138",
    email: "jedimaster@yoda.com",
    id: 1138
  },
  {
    routeName: "kirk",
    name: "Kirk",
    phone: "474-747-1701",
    email: "jtkirk@starfleet.com",
    id: 1701
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "indopakaddres.html"));
  });
  
app.get("/view", function(req, res) {
res.sendFile(path.join(__dirname, "indopakdisres.html"));
});
  
// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// FIX THIS! Displays a single character, or returns false
app.get("/api/reservations/:reservations", function(req, res) {
  let chosen = req.params.reservations;
  console.log(chosen);
  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }
  return res.json(false);
});

// Create New reservations - takes in JSON input
app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newRes = req.body;

// Using a RegEx Pattern to remove spaces from newRes
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
 newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

   console.log(newRes);

     // We then add the json the user sent to the reservations array
   reservations.push(newRes);

   // We then display the JSON to the users
   res.json(newRes);
 });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
