const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripTodoSchema = new Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false}
},{
    timestamps: true
  }
)

const TripSchema = new Schema({
    name: {type: String, required: true},
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    tripChecklist: [TripTodoSchema], 
    Destination: String,
    
},{
    timestamps: true
  }
)
const Trip = mongoose.model("Trip", TripSchema)

module.exports = Trip