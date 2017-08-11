var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema(
{
	Name: String,
	Lat: Number,
	Lang: Number,
	Id: {type : Number, index:{unique : true}},
	Image : String,
}
	);

 placeSchema.index({Lat : 1, Lang : 1}, {unique:true});


module.exports = mongoose.model('Place', placeSchema);
