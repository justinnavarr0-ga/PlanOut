import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function CheckListItems({changeToComplete, checklist, setChecklist, handleDelete}) {

  return (
    <ul>
        {checklist.map((item) => (
        <ListItem item={item} key={item._id} handleDelete={handleDelete} checklist={checklist} setChecklist={setChecklist} />))}
    </ul>
  )
}
