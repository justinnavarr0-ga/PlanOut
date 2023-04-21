import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({setTrips, deleteTrip, allUsers, trips}) {

  return (
    <div>
      {trips.map((trip, idx) => (
        <Trip setTrips={setTrips} deleteTrip={deleteTrip} allUsers={allUsers} trips={trips} trip={trip} key={idx}/>))}
    </div>
  )
}
