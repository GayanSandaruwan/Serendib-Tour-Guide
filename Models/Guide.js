var mongoose = require('mongoose');

var guideSchema = new mongoose.Schema(
{
	Cost:Number,
	Age:Number,
	Name: String,
	Reg_no: {type : String, index:{unique : true}},
}
	);

module.exports = mongoose.model('Guide', guideSchema);
