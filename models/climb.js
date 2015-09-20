var mongoose = require("mongoose");

var climbSchema = new mongoose.Schema({
  routename: {type: String, required: true},
  state: {type: String, required: true},
  nationalpark: {type: String, required: true},
  type:{type: String, required: true},
  quality: {type: String, required: true},
  difficulty: {type: String, required: true},
  pitches: {type: Number, required: true},
  year: {type: Number, required: true},
  month: {type: String, required: true},
  image: {type: String, required: true}
});

var Climb = mongoose.model("Climb", climbSchema); 

module.exports = Climb;