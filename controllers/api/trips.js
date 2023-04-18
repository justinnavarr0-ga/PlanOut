const Trips = require('../../models/Trip')

module.exports = {
    index,
    add
}

async function index(req, res) {
    try {
    const trips = await Trips.find()
    res.json(trips)   
    } catch (err) {
        console.error(`${err}`);
    }
    
}

async function add (req, res) {
    
}