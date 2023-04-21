import React from 'react'
import { useState } from 'react'
import Details from '../Details/Details';

export default function Trip({setTrips, deleteTrip, trip, trips, allUsers}) {
  
  const [thistrip, ChangeTrip] = useState(trip)
  const [showDetails, setShowDetails] = useState(false)
  const [showList, setShowList] = useState(true)

  const handleClick = (evt) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
    console.log(trip._id)
    evt.preventDefault()
    deleteTrip(trip._id)
    }
  }

  const handleTripDetails = (evt) => {
    setShowDetails(!showDetails)
    setShowList(!showList)
  }

 return (
  <>
  
    <button onClick={handleTripDetails} className="absolute right-1 bg-orange-400 hover:bg-orange-700 text-white font-bold m-3 py-1 px-1 rounded-full">
    Trip Details
    </button>
  
     
  <>
  <li className='block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 text-2xl dark:focus:bg-neutral-600 dark:focus:text-neutral-200'>
  {thistrip.name}
  {showDetails && <button className="absolute top-60 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" onClick={handleClick}>Delete Trip</button>}
  </li>
  </>

  
  {showDetails && <Details setTrips={setTrips} setShowDetails={setShowDetails} allUsers={allUsers} thistrip={thistrip} ChangeTrip={ChangeTrip}/>}
  
  </>
  

 )
}
