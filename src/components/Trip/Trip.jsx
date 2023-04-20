import React from 'react'
// import { useState } from 'react'
import TripDetail from '../TripDetail/TripDetail';
import { Link } from 'react-router-dom';

export default function Trip({trip, trips, allUsers}) {
  
  const userNames = trips.map((trip) => {
  const userIds = trip.users.map((userId) => userId.toString());
  const tripUsers = allUsers.filter((user) => userIds.includes(user._id.toString()));
  return tripUsers.map((user) => user.name);
  });

  const tripName = trip.name

return (
<Link to={{
  pathname: `/trips/${tripName}`,
  state: { element: [trip, trips, allUsers, userNames] }
}}>
  <li className='block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200'>{trip.name}</li>
</Link>
 )
}
