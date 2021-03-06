var mongoose = require('mongoose');

var BookingSchema = mongoose.Schema({
  camp_id:{
    type:String
  },
  camp_name:{
    type:String
  },
  attendee_name: {
    type: String
  },
  camp_date: {
    type: String
  },
  pgName: {
    type: String
  },
  booking_email: {
    type: String
  },
  address: {
    type: String
  },
  contact_number:  {
    type: String
  },
  special_info: {
    type: String
  },
  user_id: {
    type: String
  },
  username: {
    type: String
  },
  name_of_user:{
    type: String
  },
  user_email: {
    type: String
  }
});

var Booking = module.exports = mongoose.model('Booking', BookingSchema);



//to display records from db?
// module.exports.showBookings = function(){
//   Bookings.find({}, function(err, docs){
//     res.json(docs)
//   })
// }
