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
  },
  status: {
    type: Boolean,
    default: true,
  }
});

var Camps = module.exports = mongoose.model('Camps', CampSchema);
