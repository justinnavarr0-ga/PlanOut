import React from 'react'
import { useState, useEffect } from 'react'
import * as checklistAPI from '../../utilities/checklist-api'
import { addItem } from '../../utilities/checklist-api'
import CheckListItems from '../../components/CheckListItems/CheckListItems'
export default function MyCheckList() {

const [checklist, setChecklist] = useState([])
const [newItem, setNewItem] = useState('')
const [complete, setComplete] = useState(false)

useEffect( function() {
    async function getChecklist() {
    const checklist = await checklistAPI.getWholeChecklist()
    setChecklist(checklist)    
    }
    getChecklist()
}, [])

const handleAddItem = async (evt) => {
    evt.preventDefault()
    const newlyAddedItem = await checklistAPI.addItem({text: newItem})
    setChecklist([...checklist, newlyAddedItem])
    setNewItem('')
}

const handleDelete = async (evt) => {
    console.log('MYCHECKLIST handleDelete function', evt)
    const checklistItem = checklistAPI.deleteItem(evt)
    console.log('checklist', checklist)
    console.log('DELETE THIS ITEM', checklistItem)
    console.log('checklist again', checklist)
    // setChecklist(checklist)
    setChecklist(checklist => checklist.filter(item => item._id !== checklistItem._id))
    //this bothered me so much because i forgot that when i pass it into the API it had to match the :id 
    //still does not update immediately
}

const handleChange = (evt) => {
  setNewItem(evt.target.value)
}

  return (
    <div>
        <h1>My Checklist</h1>
        <CheckListItems checklist={checklist} setChecklist={setChecklist} handleDelete={handleDelete}/>
        
        <form onSubmit={handleAddItem}>
            <h3>Add something here </h3>
            <input type='text' name='item' value={newItem} onChange={handleChange}/>
            <button type='submit'>Add Item</button>
        </form>
    </div>
  )
}
