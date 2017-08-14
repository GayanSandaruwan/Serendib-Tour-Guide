var mongoose = require('mongoose');

var reservSchema = new mongoose.Schema(
{
	Id:Number,
	Reserv_Flag:Boolean,
	Success: Boolean,
	Time_start: Date,
	Time_end: Date,
	User_Id : String,
	Object_Id : Number,
	Object_type : String,

}
	);
 reservSchema.index({Time_start : 1, Time_end : 1, Object_Id : 1, Object_type :1}, {unique:true});

module.exports = mongoose.model('Reservation', reservSchema);
