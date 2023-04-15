const Note = require('../../models/note')
const User = require('../../models/user')
module.exports = {
    show,
    add,
}

async function show(req, res) {
    try {
     const notes = await User.find({user: req.user._id})
    res.json(notes)   
    } catch (err) {
        console.error(`${err}`);
    }
    
}

async function add(req, res) {
   try {
    req.body.user = req.user._id
    const note = await Note.create({text: req.body.text, user: req.user})
    res.json(note)
    } catch (err) {
        console.error(`${err}`);
    }

}