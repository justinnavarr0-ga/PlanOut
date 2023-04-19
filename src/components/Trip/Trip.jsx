import React from 'react'
import { Link } from 'react-router-dom'

export default function Trip({trip, trips}) {
  return (
    <Link to={`/trips/${trip.name}`} element={[trip, trips]}>
       <li>{trip.name}</li> 
    </Link>
    
  )
}
