import React from 'react'
import { useState, useEffect } from 'react'
import * as TripsAPI from '../../utilities/trips-api'
import * as usersAPI from '../../utilities/users-api'

import { useParams } from 'react-router-dom'

export default function TripDetailsPage({users}) {
  const [allUsers, setAllUsers] = useState([])
  const [trips, setTrips] = useState([])

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
    console.log(users)
  }
    getAllUsers()
}, [])

  const thisTripsId = useParams()
  console.log(thisTripsId.id)
  console.log(trips)
  const Trip = trips.find((trip) => trip._id === thisTripsId.id )
  console.log(Trip)


  return (
    <div>
      <h1>Trip Name</h1>
    
    </div>
  );
}


// const tripsmap = trips.map((trip) => trip.users)
// const doublemap = tripsmap.map((user) => user.users)
// const people = (allusers.map((person) => person))
// // const peopleID = (allusers.map((person) => person._id))
// const peopleNames = (allusers.map((person) => person.name))
// const peopleGoing = (users.map((person) => person))



// console.log('THIS ONE CONTAINS the USER OBJECT IN THE DATABASE', people)
// console.log('THIS ONE CONTAINS ALL THE USERS IDs IN THE DATABASE', peopleID)
// console.log('THIS ONE CONTAINS ALL THE USERS names IN THE DATABASE', peopleNames)
// console.log('THIS ONE CONTAINS ALL THE USERS IN EACH TRIP', tripsmap)
// console.log('THIS ONE CONTAINS ALL THE USERS IN EACH TRIP', doublemap)
// // {(users.map((person) => <li>{person}</li>))}
// const want = people.find((person) => person._id !== peopleGoing)
// console.log("WHAAAAAAAT", want) 
// return (
//     <>
//      <div>
//         <h1>Users Currently going on the trip</h1>
//        {people.filter((person) => person = peopleGoing)} 
//     </div>
//     </>
   
//   )
// {userNames.map(names => (
//   names.map(name => (
//     trips.map((trip, idx) => (
//      <Trip allUsers={allUsers} trips={trips} trip={trip} key={idx} name={name}/> 
//      ))
//   ))
// ))}


