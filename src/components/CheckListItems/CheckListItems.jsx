import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function CheckListItems({checklist}) {
const List = checklist.map((item, idx) => <ListItem item={item} key={idx}/>)
  return (
    <div>
     {List}   
    </div>
  )
}
