var mongoose = require('mongoose');

var CampSchema = mongoose.Schema({
  name: {
    type:String
  },
  description: {
    type:String
  },
  cost: {
    type: String
  },
  length: {
    type: String
  },
  dates: {
    type: String
  }
});

var Camps = module.exports = mongoose.model('Camps', CampSchema);
