const mongoose = require('mongoose');
const User = require('../../models/user')
const Trip = require('../../models/Trip')

module.exports = {
    index,
    addTrip,
    deleteTrip,
    update
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

    console.log("BODY", req.body._id)
    console.log("users", req.body.users)
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

async function deleteTrip(req, res) {
    console.log(req.body.id)
    try {
    const tripName = await Trip.findByIdAndDelete(req.body.id)
    res.json(tripName)
    } catch (err) {
        console.error(`${err}`);
    }
}

async function update(req, res) {
    console.log(req.body)
    try {
      const currentTrip = await Trip.findByIdAndUpdate(req.body._id);
      console.log("IN CONTROLLER CURRENT TRIP", currentTrip)
      if (!currentTrip) {
        return res.status(404).json({ error: 'Trip not found' });
      }
      currentTrip.name = req.body.name;
      currentTrip.users = req.body.users;
      currentTrip.tripChecklist = req.body.tripChecklist;
      currentTrip.Destination = req.body.Destination;
        currentTrip.save();
      res.json(currentTrip);
    } catch (err) {
      console.error(`${err}`);
    }
  }
