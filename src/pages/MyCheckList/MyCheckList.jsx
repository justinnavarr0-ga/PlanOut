import React from 'react'
import { useState, useEffect } from 'react'
import * as checklistAPI from '../../utilities/checklist-api'
import CheckListItems from '../../components/CheckListItems/CheckListItems'
export default function MyCheckList({user}) {
const [me, setMe] = useState(user)
const [checklist, setChecklist] = useState([])
const [newItem, setNewItem] = useState('')
const [complete, setComplete] = useState(true)

useEffect( function() {
    console.log('This is the user in MyCheckList', user.name)
    console.log('This is the user in MyCheckList', user._id)
    console.log('This is the me in MyCheckList', me._id)
    async function getChecklist() {
    const checklist = await checklistAPI.getWholeChecklist()
    console.log(checklist)
    setChecklist(checklist.filter(item => item.user === me._id))    
    }
    getChecklist()
}, [])

const changeToComplete = async (evt) => {
  evt.preventDefault()
  const checklistItem = await checklistAPI.markComplete(evt)
  setComplete(checklistItem.complete === true)
}

const handleAddItem = async (evt) => {
    evt.preventDefault()
    const newlyAddedItem = await checklistAPI.addItem({text: newItem, user: me._id})
    setChecklist([...checklist, newlyAddedItem])
    setNewItem('')
}

const handleDelete = async (evt) => {
    console.log('MYCHECKLIST handleDelete function', evt)
    const checklistItem = await checklistAPI.deleteItem(evt)
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
  <>
<form onSubmit={handleAddItem}>
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="ml-[0px] text-left text-grey-darkest">My Checklist</h1>
            <div className="flex mt-4">
                <input type='text' name='item' value={newItem} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                <button type='submit' className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
        </div>
        <div>
            <div className="flex mb-4 items-center">
                <div className="w-full text-grey-darkest"><CheckListItems changeToComplete={changeToComplete} checklist={checklist} setChecklist={setChecklist} handleDelete={handleDelete}/></div>
            </div>
        </div>
    </div>
</div>
</form>
    </>
  )
}
