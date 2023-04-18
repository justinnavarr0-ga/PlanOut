import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({trips ,setTrips}) {
  return (
    <div>
      {trips.map((trip) => (
        <Trip trip={trip}/>))}
    </div>
  )
}
