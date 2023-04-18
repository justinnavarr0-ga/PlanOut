const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    name: {type: String, required: true},
    users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    
},{
    timestamps: true
  }
)
const checklist = mongoose.model("Checklist", checklistSchema)

module.exports = checklist