import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TripDetail from '../../components/TripDetail/TripDetail';

export default function TripDetailsPage() {
  const location = useLocation();
  const [tripElement, setTripElement] = useState(null);
  console.log(tripElement)
  useEffect(() => {
    if (location.state && location.state.element) {
      setTripElement(location.state.element);
    }
  }, [location]);

  return (
    <div>
      <h1>hello</h1>
      <TripDetail tripElement={tripElement} />
    </div>
  );
}


// const tripsmap = trips.map((trip) => trip.users)
// const doublemap = tripsmap.map((user) => user.users)
// const people = (allusers.map((person) => person))
// // const peopleID = (allusers.map((person) => person._id))
// const peopleNames = (allusers.map((person) => person.name))
// const peopleGoing = (users.map((person) => person))



// console.log('THIS ONE CONTAINS the USER OBJECT IN THE DATABASE', people)
// console.log('THIS ONE CONTAINS ALL THE USERS IDs IN THE DATABASE', peopleID)
// console.log('THIS ONE CONTAINS ALL THE USERS names IN THE DATABASE', peopleNames)
// console.log('THIS ONE CONTAINS ALL THE USERS IN EACH TRIP', tripsmap)
// console.log('THIS ONE CONTAINS ALL THE USERS IN EACH TRIP', doublemap)
// // {(users.map((person) => <li>{person}</li>))}
// const want = people.find((person) => person._id !== peopleGoing)
// console.log("WHAAAAAAAT", want) 
// return (
//     <>
//      <div>
//         <h1>Users Currently going on the trip</h1>
//        {people.filter((person) => person = peopleGoing)} 
//     </div>
//     </>
   
//   )
// {userNames.map(names => (
//   names.map(name => (
//     trips.map((trip, idx) => (
//      <Trip allUsers={allUsers} trips={trips} trip={trip} key={idx} name={name}/> 
//      ))
//   ))
// ))}


