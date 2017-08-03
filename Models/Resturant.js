var mongoose = require('mongoose');

var resturantSchema = new mongoose.Schema(
{
	Cost:Number,
	Owner:String,
	Name: String,
	Location: String,
	Reg_no: {type : String, index:{unique : true}},
}
	);

module.exports = mongoose.model('Resturant', resturantSchema);
