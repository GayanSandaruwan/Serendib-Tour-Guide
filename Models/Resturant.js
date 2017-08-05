var mongoose = require('mongoose');

var resturantSchema = new mongoose.Schema(
{
	Cost:Number,
	Owner:String,
	Name: String,
	Location: String,
	Id: {type : String, index:{unique : true}},
}
	);

module.exports = mongoose.model('Resturant', resturantSchema);
