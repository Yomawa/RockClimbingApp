var express = require('express'),
app = express(),
bodyParser = require("body-parser");
methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));
db = require("./models");


app.get("/", function(req, res){
  res.redirect("/climb");
});
//GET INDEX
app.get('/climb', function (req, res) {
  db.Climb.find({}, function (err, route) {
    err ? console.log(err) : res.render("climb/index", {climb: route});
  });
});

//NEW
app.get("/climb/new", function (req, res){
  res.render("climb/new");
});
//CREATE
app.post("/climb",function (req, res){
  db.Climb.create(req.body.route, function(err, route){
    err ? console.log(err) : res.redirect("/");
  });
});
//LOOK BY ID AND DISPLAY or SHOW
app.get("/climb/:id", function (req, res){
  db.Climb.findById(req.params.id, function (err, route){
    err ? res.render("404") : res.render("climb/show",{route: route});
  });
});

//EDIT
app.get("/climb/:id/edit", function (req, res){
  db.Climb.findById(req.params.id, function(err, route){
    err ? res.render("404") : res.render("climb/edit", {route: route});
  });
  
});
//UPDATE
app.put("/climb/:id", function (req, res){
  db.Climb.findByIdAndUpdate(req.params.id, req.body.route, function(err, route){
    err ? console.log(err) : res.redirect("/");
  });
});
//DELETE
app.delete("/climb/:id", function (req,res){
  db.Climb.findByIdAndRemove(req.params.id, function(err, route){
    err ? console.log(err) : res.redirect("/");
  });
});



// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});