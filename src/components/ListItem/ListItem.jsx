import React from 'react'
import { useState } from 'react'

export default function ListItem({changeToComplete, item, handleDelete}) {

const [here, setHere] = useState(true)

const handleClick = (evt) => {
    console.log('This is the item ID', item)
    handleDelete(item._id, item.text, item.user)
    setHere(false)
}

 
  return (
    <li className="flex justify-between items-center">
  <span className="mr-4">{item.text}</span>
  {here && (
    <div className="flex">
      <button className="flex-no-shrink p-2 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
      <button onClick={handleClick} className="flex-no-shrink p-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
    </div>
  )}
</li>
  )
}
