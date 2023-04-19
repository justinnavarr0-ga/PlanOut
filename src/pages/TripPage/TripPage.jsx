import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'
import TripForm from '../../components/TripForm/TripForm'
import AddTripButton from '../../components/AddTripButton/AddTripButton'
import TripList from '../../components/TripList/TripList'
import * as usersAPI from '../../utilities/users-api'

export default function TripPage() {
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


  return (
    <>
        <TripList allUsers={allUsers} trips={trips} setTrips={setTrips}/>
        {!showForm && <TripForm allUsers={allUsers} trips={trips} setTrips={setTrips} setShowForm={setShowForm} showForm={showForm}/> }
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
