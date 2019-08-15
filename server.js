var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

var items = require("./routes/api/items");

// Bodyparser Middelware
app.use(bodyParser.json());

// DB Config
var db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(function() {
    console.log("MongoDB connected");
  })
  .catch(function(err) {
    console.log(err);
  });

//Use routes

var port = process.env.PORT || 5000;

app.use("/api/items", items);

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
