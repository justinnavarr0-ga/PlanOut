const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checklistSchema = new Schema({
    text: {type: String},
    complete: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
},{
    timestamps: true
  }
)
const checklist = mongoose.model("Checklist", checklistSchema)

module.exports = checklist