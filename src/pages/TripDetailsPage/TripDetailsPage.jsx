import React from 'react'
import { useParams } from 'react-router-dom'

// cannot import useEffect not sure why
// useEffect( function() {
//     async function getAllUsers() {
//     const users = await usersAPI.getAllUsers() 
//     setAllUsers(users)
//   }
//     getAllUsers()
// }, [])

// useEffect( function() {
//     async function getAllUsers() {
//     const users = await usersAPI.getAllUsers() 
//     setAllUsers(users)
//   }
//     getAllUsers()
// }, [])

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
