import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({allUsers, trips}) {
  console.log("allUSERS is", allUsers)
  console.log("trips is", trips)

  return (
    <div>
      {trips.map((trip, idx) => (
        <Trip allUsers={allUsers} trips={trips} trip={trip} key={idx}/>))}
    </div>
  )
}
