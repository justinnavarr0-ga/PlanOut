import React from 'react'
import { useState } from 'react'
import * as TripsAPI from '../../utilities/trips-api'

export default function Details({ChangeTrip ,setTrips, thistrip, allUsers, setShowDetails}) {
const [form, setForm] = useState(thistrip)


async function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? [...form[name], value] : value;
    const updatedForm = { ...form, [name]: newValue };
    setForm(updatedForm);
  }
    
async function handleSubmit(evt) {
    evt.preventDefault()
    console.log(thistrip)
    console.log(form)
    const updatedTrip = await TripsAPI.updateTrip(form);
    console.log(updatedTrip)
    ChangeTrip(updatedTrip);
    setShowDetails(false)
      }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
          <button id='CANCELBUTTON' className="absolute right-0 -top-1 bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShowDetails(false)}>{form ? 'x' : ''}</button>
                    <div>
                        <h1 className="text-2xl font-semibold">Edit Trip Name</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="" />							<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Trip Name</label>
                            </div>
                            <br />
                <label>Change Whos Invited Below</label>
                <div className="grid grid-cols-3 gap-4">
                {allUsers.map((person) => 
                  <div key={person._id} className="flex items-center">
                <input
                type="checkbox"
                checked={form.users.includes(person._id)}
                value={person._id} name="users" onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                /><label className="ml-2">{person.name}</label>
                  </div>)}
                </div>
                            <div className="relative">
                                <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
      </>
  )
}
