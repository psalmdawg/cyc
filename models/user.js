var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
  username: {
    type: String, index:true, required:true, trim:true, lowercase:true
  },
  password: {
    type: String
  },
  email:  {
    type: String, required: true, trim: true, lowercase:true
  },
  name: {
    type: String, trim:true
  },
  admin: Boolean, default: false
});

// UserSchema.plugin(passportLocalMongoose, {usernameLowerCase: true});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback){
  //creates new user and encrypted password
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        // Store hash in your password DB.
        newUser.password = hash;
        newUser.save(callback);
    });
  });
};

//login query. selects user by name to lowercase
module.exports.getUserByUsername = function(username, callback){
  var query = {username: username.toLowerCase()};
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch)
  });
};
