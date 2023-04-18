import React from 'react'

export default function ListItem({item, handleDelete}) {


  return (
    <li>completed: <button>O</button> {item.text}  <button onClick={() => handleDelete(item._id)}>x</button></li>
  )
}
