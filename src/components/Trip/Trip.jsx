import React from 'react'
import { useState } from 'react'
import TripDetailsPage from '../../pages/TripDetailsPage/TripDetailsPage'


export default function Trip({trip, trips, allUsers}) {

const [showDetails, setShowDetails] = useState(false)

const showMeDetails = (evt) => {
        setShowDetails(!showDetails)
    }
  return (
    //trip.name is the NAME so trip.users should have the users
    <li onClick={showMeDetails} className='block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200'>{trip.name}
     {showDetails && <TripDetailsPage tripchecklist={trip.tripChecklist} users={trip.users} trips={trips} allusers={allUsers}/> }
    </li>
    
  )
}
