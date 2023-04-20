import React from 'react'
import { useState } from 'react'

export default function TripDetailsPage({tripchecklist, users, trips, allusers}) {
console.log(allusers)
const [filteredUsers, setFilteredUsers] = useState([])


const tripsmap = trips.map((trip) => trip.users)
console.log("tripsmap", tripsmap)
const people = (allusers.map((person) => person._id))
const peopleNames = (allusers.map((person) => person.name))
const peopleGoing = (trips.filter((person) => person._id === users._id))


console.log('THIS ONE CONTAINS ALL THE USERS IDs IN THE DATABASE', people)
console.log('THIS ONE CONTAINS ALL THE USERS names IN THE DATABASE', peopleNames)
console.log('THIS ONE CONTAINS ALL THE USERS IN EACH TRIP', tripsmap)

return (
    <>
     <div>
        <h1>Users Currently going on the trip</h1>
        {users}
    </div>
    </>
   
  )
}
