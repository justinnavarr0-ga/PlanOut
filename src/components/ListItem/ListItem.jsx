import React from 'react'

export default function ListItem({item, handleDelete}) {

const handleClick = (evt) => {
    console.log('This is the item ID', item._id)
    handleDelete(item._id)
}

 
  return (
    <li>completed: <button>O</button> {item.text}  <button onClick={handleClick}>x</button></li>
  )
}
