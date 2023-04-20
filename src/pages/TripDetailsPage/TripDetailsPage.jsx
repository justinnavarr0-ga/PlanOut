import React from 'react'
import { useState } from 'react'

export default function TripDetailsPage({tripchecklist, users, trips, allusers}) {
console.log(allusers)
const [filteredUsers, setFilteredUsers] = useState([])


const peopleGoing = (allusers.filter((person) => person._id === users._id))
console.log('filteredUsers', filteredUsers)
console.log('pplgoing', peopleGoing)
return (
    <>
     <div>
        <h1>Users Currently going on the trip</h1>
        {users}
        {filteredUsers.name}
    </div>
    </>
   
  )
}
