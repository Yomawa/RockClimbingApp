var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/climb_app");

module.exports.Climb = require("./climb");