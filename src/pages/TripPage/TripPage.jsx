import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'
import TripForm from '../../components/TripForm/TripForm'
import AddTripButton from '../../components/AddTripButton/AddTripButton'
import TripList from '../../components/TripList/TripList'

export default function TripPage() {

  const [trips, setTrips] = useState([])
  const [showForm, setShowForm] = useState(true)

  useEffect( function() {
    async function getAllTrips() {
    const TripList = await TripsAPI.getAllTrips()
    setTrips(TripList)    
    }
    getAllTrips()
}, [])

  return (
    <>
    <h1>Trips Page</h1>
        <TripList trips={trips} setTrips={setTrips}/>
        {!showForm && <TripForm trips={trips} setTrips={setTrips} setShowForm={setShowForm} showForm={showForm}/> }
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {showForm && <AddTripButton setShowForm={setShowForm} showForm={showForm}/> }
    </>
    
  )
}
