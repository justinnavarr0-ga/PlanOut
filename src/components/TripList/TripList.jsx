import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({deleteTrip, allUsers, trips}) {

  return (
    <div>
      {trips.map((trip, idx) => (
        <Trip deleteTrip={deleteTrip} allUsers={allUsers} trips={trips} trip={trip} key={idx}/>))}
    </div>
  )
}
