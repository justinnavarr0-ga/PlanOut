import React from 'react'

export default function AddTripButton({showForm, setShowForm}) {
  return (
    <div>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShowForm(!showForm)}>{showForm ? '+ Add a Trip' : '' }</button>
    </div>
  )
}
