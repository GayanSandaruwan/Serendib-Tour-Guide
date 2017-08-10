var mongoose = require('mongoose');

var carSchema = new mongoose.Schema(
{
	Cost:Number,
	Owner:String,
	Model: String,
	Reg_no: {type : String, index:{unique : true}},
	Manu_fac : String,
	Image: String,

}
	);

module.exports = mongoose.model('Car', carSchema);
