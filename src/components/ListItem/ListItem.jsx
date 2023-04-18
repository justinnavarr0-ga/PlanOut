import React from 'react'

export default function ListItem({item}) {


  return (
    <li>completed: <button>O</button> {item.text} <button>x</button></li>
  )
}
