import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'

export default function TripForm({trips, setTrips, showForm, setShowForm}) {

const [newTrip, setNewTrip] = useState('')


async function handleChange(evt) {
    setNewTrip(evt.target.value);
    }
    
async function handleSubmit(evt) {
    evt.preventDefault();
        const newlyAddedTrip = await TripsAPI.createTrip({name: newTrip});
        setTrips([...trips, newlyAddedTrip]);
        setShowForm(true)
      }

return (
  <>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShowForm(true)}>{showForm ? '' : 'x'}</button>
        <h1>Create A New Trip</h1> 
            <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <label>Trip Name</label><br />
                <input type="text" name="name" value={newTrip} onChange={handleChange} required/>
                <option></option>
                <button type="submit">CREATE TRIP</button>
                </form>
            </div>
            </div>
        
  </>
  )
}
