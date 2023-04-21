const Checklist = require('../../models/checklist')
module.exports = {
    show,
    add,
    delete: deleteOne,
    update
}

async function update(req, res){
    console.log('REQBODY',req.body)
    try {
        const checklist = await Checklist.findByIdAndUpdate(req.body.id)
        checklist.complete = !checklist.complete
        await checklist.save()
        res.json(checklist)
    } catch (err) {
        console.error(`${err}`);
    }
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
    console.log(req.user)
    const checklistItem = new Checklist(
        {text: req.body.text,
        user: req.user}
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
    const checklist = await Checklist.findByIdAndDelete(req.body.id)
    res.json(checklist)
    } catch (err) {
        console.error(`${err}`);
    }
}