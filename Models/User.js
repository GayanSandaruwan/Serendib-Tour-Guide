var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
{
	first_name:String,
	last_name:String,
	NIC: String,
	email: {type : String, index:{unique : true}},
	key : String,

}
	);

module.exports = mongoose.model('User', userSchema);
