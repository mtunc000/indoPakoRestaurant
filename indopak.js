
var express = require('express');
var path = require("path");
var app = express()

//var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
  //app.listen(3000)



////////////////////////
// Dependencies


//Sets up the Express App
//=============================================================
var app = express();
var PORT = process.env.PORT || 3000;  ////////for heroku

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var foods = [
  {
    mainDish: "kabab",
    drinks: "coke",
    salads: "salad",
    desert: "doughnut",
    price: 2000,
    waitTime: 30
  },
  {
    mainDish: "kofte",
    drinks: "coke",
    salads: "salad",
    desert: "doughnut",
    price: 2000,
    waitTime: 30
  },
  {
    mainDish: "kabab",
    drinks: "coke",
    salads: "salad",
    desert: "doughnut",
    price: 2000,
    waitTime: 30
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "indopak.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(foods);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.food;

  console.log(chosen);

  for (var i = 0; i < foods.length; i++) {
    if (chosen === foods[i].routeName) {
      return res.json(foods[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfood = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfood.routeName = newfood.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfood);

  foods.push(newfood);

  res.json(newfood);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




////////////////////////////////////////////////

// itemOrder()
// ////////////////////////////////////addiing datas////////




// function itemOrder() {
//     // prompt for info about the item being put up for auction
//     inquirer
//       .prompt([
//         {
//           name: "mainDish",
//           type: "input",
//           message: "What is the mainDish wpuld you like to order?"
//         },
//         {
//           name: "drinks",
//           type: "input",
//           message: "What is the drinks?"
//         },
//         {
//           name: "salads",
//           type: "input",
//           message: "What is the salads?"
//         },
//         {
//             name: "deserts",
//             type: "input",
//             message: "What is the deserts?"
//           },
//         {
//           name: "price",
//           type: "input",
//           message: "What is the price of your item?",
//           validate: function(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//            return false;
//           }
//         },
        
//           {
//             name: "waitTime",
//             type: "input",
//             message: "how many minutes?",
//             validate: function(value) {
//               if (isNaN(value) === false) {
//                 return true;
//               }
//              return false;
//             }
//           },
        
//       ])
//       .then(function(answer) {
//         // when finished prompting, insert a new item into the db with that info
//         connection.query(
//           "INSERT INTO products SET ?",
//           {
//             maindish: answer.mainDish,
//             drinks: answer.drinks,
//             salads:answer.salads,
//             deserts:answer.deserts,
//             price: answer.price,
//             waitTime: answer.waitTime
//           },
//           function(err) {
//             if (err) throw err;
//             console.log("Your item was created successfully!");
//             // re-prompt the user for if they want to bid or post
//             start();
//           }
//         );
//         connection.end();
//       });
//   }
  
  