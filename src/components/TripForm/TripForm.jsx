import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'

export default function TripForm({trips, setTrips, showForm, setShowForm}) {

const [newTrip, setNewTrip] = useState('')

useEffect( function() {
    async function getAllTrips() {
    const TripList = await TripsAPI.getAllTrips()
    setTrips(TripList)    
    }
    getAllTrips()
}, [])

async function handleChange(evt) {
    setNewTrip(evt.target.value);
    }
    
async function handleSubmit(evt) {
    evt.preventDefault();
      try {
        const newTrip = TripsAPI.createTrip();
        setTrips([...trips, newTrip]);
        setShowForm(true)
        } catch {
          setError('Did not work. Try Again Later');
        }
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
                <button type="submit">CREATE TRIP</button>
                </form>
            </div>
            </div>
        
  </>
  )
}
