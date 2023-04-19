import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllTrips } from '../../utilities/trips-api'


export default function TripDetailsPage({trip}) {
    const {tripName} = useParams()
    return (
    <div>
        <h1>Trip Details Page</h1>
        <li>{trip}</li>
    </div>
  )
}
