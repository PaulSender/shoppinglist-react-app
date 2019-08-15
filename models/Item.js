var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Create Scehma

var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
