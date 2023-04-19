how do i fix this? 
when i create a new trip my users are added to the trip inside the trip schema and they are saved into mongodb. but when i create another trip using the same users , get an error telling me MongoServerError: E11000 duplicate key error collection: PlanOut.trips index: users_1 dup key: { users: ObjectId('644041f63cd504fd03ac7c25') } 

// this is my form 
import React from 'react'
import { useState } from 'react'
import * as TripsAPI from '../../utilities/trips-api'


export default function TripForm({trips, setTrips, showForm, setShowForm, allUsers}) {




const [newTrip, setNewTrip] = useState('')
const [friends, setFriends] = useState([])

async function handleChange(evt) {
    setNewTrip(evt.target.value);
    }

async function handleFriends(evt) {
    setFriends([...friends, evt.target.value])
    }
    
async function handleSubmit(evt) {
    evt.preventDefault();
        const newlyAddedTrip = await TripsAPI.createTrip({name: newTrip, users: friends});
        setTrips([...trips, newlyAddedTrip]);
        setShowForm(true)
      }

return (
  <>
<form onSubmit={handleSubmit}>
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
      <button id='CANCELBUTTON' className="absolute right-0 -top-1 bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShowForm(true)}>{showForm ? '' : 'x'}</button>
				<div>
					<h1 className="text-2xl font-semibold">Add a new Trip</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
            <input type="text" name="name" value={newTrip} onChange={handleChange} required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="" />							<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Trip Name</label>
						</div>
            <label>Choose Some Friends To Invite!</label>
            <div className="grid grid-cols-3 gap-4">
            {allUsers.map((person) => 
              <div key={person._id} className="flex items-center">
                <input type="checkbox" value={person._id} onChange={handleFriends} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2">{person.name}</label>
              </div>
              )}
            </div>
						<div className="relative">
							<button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </form>
  </>
  )
}

// this is my controller


const User = require('../../models/user')
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

    console.log("BODY", req.body)
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

// this is my model 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user')

const TripTodoSchema = new Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false}
},{
    timestamps: true
  }
)

const TripSchema = new Schema({
    name: {type: String, required: true},
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}],

    tripChecklist: [TripTodoSchema], 
    Destination: String,
    
},{
    timestamps: true
  }
)

// TripSchema.methods.addUser = async function (userID) {
//   const trip = this;
//   const friends = trip.users.find(friends => friends. )
// }

const Trip = mongoose.model("Trip", TripSchema)

module.exports = Trip