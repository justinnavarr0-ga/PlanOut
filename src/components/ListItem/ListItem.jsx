import React from 'react'

export default function ListItem({item}) {
    console.log(item)
  return (
    <li>{item._id}{item.complete}
    </li>
  )
}
