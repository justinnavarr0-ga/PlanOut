import React from 'react'
import { useState, useEffect } from 'react'
import * as checklistAPI from '../../utilities/checklist-api'
import { addItem } from '../../utilities/checklist-api'
import CheckListItems from '../../components/CheckListItems/CheckListItems'
export default function MyCheckList() {

const [checklist, setChecklist] = useState([])
const [newItem, setNewItem] = useState('')

useEffect( function() {
    async function getChecklist() {
    const checklist = await checklistAPI.getWholeChecklist()
    setChecklist(checklist)    
    }
    getChecklist()
}, [])

const handleAddItem = async (evt) => {
    evt.preventDefault()
    const newlyAddedItem = await addItem({text: newItem})
    setChecklist([...checklist, newlyAddedItem])
}


const handleChange = (evt) => {
console.log(evt.target.value)
  setNewItem(evt.target.value)
}

  return (
    <div>
        <h1>My Checklist</h1>
        <CheckListItems checklist={checklist}/>
        
        <form onSubmit={handleAddItem}>
            <h3>Add something here </h3>
            <input type='text' name='item' value={newItem} onChange={handleChange}/>
            <button type='submit'>Add Item</button>
        </form>
    </div>
  )
}
