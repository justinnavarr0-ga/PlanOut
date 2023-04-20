import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'
import TripForm from '../../components/TripForm/TripForm'
import AddTripButton from '../../components/AddTripButton/AddTripButton'
import TripList from '../../components/TripList/TripList'
import * as usersAPI from '../../utilities/users-api'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'

export default function TripPage({user}) {
  const [allUsers, setAllUsers] = useState([])
  const [trips, setTrips] = useState([])
  const [showForm, setShowForm] = useState(true)

  useEffect( function() {
    async function getAllTrips() {
    const TripList = await TripsAPI.getAllTrips()
    setTrips(TripList)    
    }
    getAllTrips()
}, [])


  useEffect( function() {
    async function getAllUsers() {
    const users = await usersAPI.getAllUsers() 
    setAllUsers(users)
  }
    getAllUsers()
}, [])


 const DeleteTrip = async (evt) => {
  const TripList = await TripsAPI.deleteTrip({id: evt})
  console.log("TRIPLISTTT", TripList)
  console.log(trips)
  setTrips(trips => trips.filter(trip => trip._id !== TripList._id))    
  }
  

  return (
    <>
        <TripList deleteTrip={DeleteTrip} user={user} allUsers={allUsers} trips={trips} setTrips={setTrips}/>
        {!showForm && <TripForm user={user} allUsers={allUsers} trips={trips} setTrips={setTrips} setShowForm={setShowForm} showForm={showForm}/> }
        {showForm && <AddTripButton setShowForm={setShowForm} showForm={showForm}/> }
    </>
    
  )
}
