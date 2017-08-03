var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema(
{
	Name: String,
	Lat: Number,
	Lang: Number,
	Reg_no: {type : String, index:{unique : true}},
}
	);

module.exports = mongoose.model('Place', placeSchema);
