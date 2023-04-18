

const Trip = require('../../models/Trip')

module.exports = {
    index,
    addTrip
}

async function index(req, res) {
    try {
    const trips = await Trip.find()
    res.json(trips)   
    } catch (err) {
        console.error(`${err}`);
    }
    
}

async function addTrip(req, res) {
    console.log("TEXT", req.body.text)
    console.log("NAME",req.body.name)
    try {
        const newTrip = new Trip({
            name: req.body.name,
            users: req.body.users,
            tripChecklist: req.body.tripChecklist,
            Destination: req.body.Destination
        });
        await newTrip.save();
        res.json(newTrip);
    } catch (err) {
     console.error(`${err}`);   
    }
    
}