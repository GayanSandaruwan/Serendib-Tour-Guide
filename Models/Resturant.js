var mongoose = require('mongoose');

var resturantSchema = new mongoose.Schema(
{
	Cost:Number,
	Owner:String,
	Name: String,
	Location: String,
	Id: {type : String, index:{unique : true}},
	Image: String,
}
	);

module.exports = mongoose.model('Resturant', resturantSchema);
