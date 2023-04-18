import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function CheckListItems({checklist, setChecklist, handleDelete}) {

  return (
    <div>
        {checklist.map((item) => (
        <ListItem item={item} key={item._id} handleDelete={handleDelete} checklist={checklist} setChecklist={setChecklist} />))}
    </div>
  )
}
