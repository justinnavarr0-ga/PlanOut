import React from 'react'
import { useState } from 'react'

export default function ListItem({changeToComplete, item, handleDelete}) {

const [here, setHere] = useState(true)

const handleClick = (evt) => {
    handleDelete(item._id, item.text, item.user)
    setHere(false)
}
const handleUpdate = (evt) => {
  console.log('This is the item ID', item._id)
  changeToComplete(item._id)
}
 
  return (
    <li className="flex justify-between items-center">
  <span className={item.complete ? "completed" : ""}>{item.text} </span>
  {here && (
    <div className="flex">
      <button onClick={handleUpdate} className="flex-no-shrink p-2 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
      <button onClick={handleClick} className="flex-no-shrink p-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
    </div>
  )}
</li>
  )
}
