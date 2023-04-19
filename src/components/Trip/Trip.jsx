import React from 'react'
import { Link } from 'react-router-dom'

export default function Trip({trip, trips}) {
  return (
    <Link to={`/trips/${trip.name}`} element={[trip, trips]}>
       <li className="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">{trip.name}</li> 
    </Link>
    
  )
}
