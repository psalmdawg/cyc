var express = require('express')
var ConnectRoles = require('connect-roles');
var router = express.Router();
var Camp = require('../models/camps')



router.get('/', ensureAuthenticated, function(req, res){
  console.log(req.user.admin)

  var offLine = [];
  var onLine = [];

  if (req.user.admin === true){
    Camp.find({}, function(err, camps){
      for(var i in camps){
        if(camps[i].status === true){
          onLine.push(camps[i]);
        } else {
          offLine.push(camps[i]);
        }
      }
      res.render('admin/index', {
        onLine:onLine,
        offLine:offLine
      });
    });
  } else {
    req.flash('error_msg', 'Access Forbidden')
    res.redirect('/')
  }
})

router.get('/:id', ensureAuthenticated, function(req, res){
  console.log(req.user.admin)
  if (req.user.admin === true){
    Camp.findOne({'_id':req.params.id}, function(err, camp){
      if(err) throw err;
      console.log(camp)
      res.render('admin/show', {
        camp:camp
      });
    });
  } else {
    req.flash('error_msg', 'Access Forbidden')
    res.redirect('/')
  }
});

// Camp.find({}, function(err, camps){
//   for(var i in camps){
//     if(camps[i].status === true){
//       onLine.push(camps[i]);
//     } else {
//       offLine.push(camps[i]);
//     }
//   }

//   onLine:onLine,
//   offLine:offLine
// });
// });



function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    // req.flash('error_msg', 'you are not logged in')
    res.redirect('/users/login');
  }
}


module.exports = router;
