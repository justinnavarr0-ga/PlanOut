import React from 'react'
// import { useState } from 'react'

import { Link } from 'react-router-dom';

export default function Trip({deleteTrip, trip, trips, allUsers}) {
  
  const userNames = trips.map((trip) => {
  const userIds = trip.users.map((userId) => userId.toString());
  const tripUsers = allUsers.filter((user) => userIds.includes(user._id.toString()));
  return tripUsers.map((user) => user.name);
  });

  const tripName = trip.name

  const handleClick = (evt) => {
    console.log(trip._id)
    evt.preventDefault()
    deleteTrip(trip._id)
  }

return (
  <li className='block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200'>
   <button className="absolute right-1 bg-purple-500 hover:bg-orange-700 text-white font-bold py-1 px-1 rounded-full">
   <Link
  to={{
    pathname: `/trips/${trip._id}`,
    state: { trip, deleteTrip, allUsers, trips }
    }}>
  Trip Details
</Link>
   </button> 
  {trip.name}
  <button className="absolute right-28 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-full" onClick={handleClick}>Delete Trip</button>
  </li>

 )
}
