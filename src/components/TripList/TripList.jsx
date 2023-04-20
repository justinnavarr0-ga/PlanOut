import React from 'react'
import Trip from '../Trip/Trip'


export default function TripList({allUsers, trips}) {
  const userNames = trips.map((trip) => {
    const userIds = trip.users.map((userId) => userId.toString());
    const tripUsers = allUsers.filter((user) => userIds.includes(user._id.toString()));
    return tripUsers.map((user) => user.name);
  });
  console.log(userNames)

  return (
    <div>
      {trips.map((trip, idx) => (
        <Trip allUsers={allUsers} trips={trips} trip={trip} key={idx}/>))}
    </div>
  )
}
