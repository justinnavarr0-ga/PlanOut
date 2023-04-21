import React from 'react'
import { useState } from 'react'

export default function ListItem({changeToComplete, item, handleDelete}) {

const [here, setHere] = useState(true)

const handleClick = (evt) => {
  evt.preventDefault()  
  handleDelete(item._id, item.text, item.user)
    setHere(false)
}
const handleUpdate = (evt) => {
  evt.preventDefault()
  changeToComplete(item._id)
  setHere(true)
}
 
  return (
    <>
{here &&   
<li className="flex justify-between items-center">
   <h1 className={item.completed ? "line-through" : ""}>{item.text}</h1>
  
    <div className="flex">
      <button onClick={handleUpdate} className="flex-no-shrink p-2 mr-2 border-2 rounded hover:text-red text-green border-green hover:bg-green">Done</button>
      <button onClick={handleClick} className="flex-no-shrink p-2 border-2 rounded text-red border-red hover:text-red hover:bg-red">Remove</button>
    </div>
</li>
}
    </>
  
  )
}
