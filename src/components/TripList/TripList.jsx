import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({trips}) {
  return (
    <div>
      {trips.map((trip, idx) => (
        <Trip trips={trips} trip={trip} key={idx}/>))}
    </div>
  )
}
