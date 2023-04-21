import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function CheckListItems({changeToComplete, checklist, setChecklist, handleDelete}) {

  return (
    <ul>
        {checklist.map((item, idx) => (
        <ListItem changeToComplete={changeToComplete}item={item} key={idx} handleDelete={handleDelete} checklist={checklist} setChecklist={setChecklist} />))}
    </ul>
  )
}
