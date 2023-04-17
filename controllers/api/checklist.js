const Checklist = require('../../models/checklist')
const User = require('../../models/user')
module.exports = {
    show,
    add,
}

async function show(req, res) {
    try {
     const checklist = await Checklist.find()
    res.json(checklist)   
    } catch (err) {
        console.error(`${err}`);
    }
    
}

async function add(req, res) {
   try {
    const checklist = new Checklist({text: req.body.text})
    checklist.save()
    res.json(checklist)
    } catch (err) {
        console.error(`${err}`);
    }

}