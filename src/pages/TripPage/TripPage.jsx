import React from 'react'
import { useState, useEffect } from 'react'
import TripForm from '../../components/TripForm/TripForm'
import AddTripButton from '../../components/AddTripButton/AddTripButton'
import TripList from '../../components/TripList/TripList'

export default function TripPage() {

  const [trips, setTrips] = useState([])
  const [showForm, setShowForm] = useState(false)

  return (
    <>
    <h1>Trips Page</h1>
        <TripList />
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
