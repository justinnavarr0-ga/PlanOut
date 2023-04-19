import React from 'react'
import { useParams } from 'react-router-dom'



export default function TripDetailsPage({trip}) {
    const {tripName} = useParams()
    return (
    <div>
        {tripName}
        <h1>Trip Details Page</h1>
        <li>{trip}</li>
    </div>
  )
}
