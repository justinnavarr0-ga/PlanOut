const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: String,
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
},{
  timestamps: true,
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Note', noteSchema);