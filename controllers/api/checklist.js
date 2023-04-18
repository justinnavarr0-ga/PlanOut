const Checklist = require('../../models/checklist')
module.exports = {
    show,
    add,
    delete: deleteOne
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
    console.log(req.body)
   try {
    const checklistItem = new Checklist(
        {text: req.body.text}
    )
    checklistItem.save()
    console.log(checklistItem)
    res.json(checklistItem)
    } catch (err) {
        console.error(`${err}`);
    }

}

async function deleteOne(req, res) {
    try {
    const checklist = await Checklist.findByIdAndDelete(req.params.id)
    res.json(checklist)
}