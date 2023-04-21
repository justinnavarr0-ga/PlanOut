import React from 'react'
import { useState, useEffect } from 'react'
import * as checklistAPI from '../../utilities/checklist-api'
import CheckListItems from '../../components/CheckListItems/CheckListItems'
export default function MyCheckList({user}) {
const [me, setMe] = useState(user)
const [checklist, setChecklist] = useState([])
const [newItem, setNewItem] = useState('')


useEffect( function() {
    async function getChecklist() {
    const checklist = await checklistAPI.getWholeChecklist()
    setChecklist(checklist.filter(item => item.user === me._id))  
    //maybe i can use this in the trips too  
    }
    getChecklist()
}, [])

const changeToComplete = async (evt) => {
  evt.preventDefault()
  console.log(evt)
  const checklistItem = await checklistAPI.markComplete(evt)
  console.log("LINE 26 CHECKLISTITEM", checklistItem)
  console.log("LINE 26 CHECKLISTITEM", checklist)
  setChecklist(checklist => checklist.map((item) => {
    console.log(item._id, checklistItem._id)
    if (item._id === checklistItem._id) {
      item.complete == checklistItem.complete
    }
  }))
}

const handleAddItem = async (evt) => {
    evt.preventDefault()
    const newlyAddedItem = await checklistAPI.addItem({text: newItem, user: me._id})
    setChecklist([...checklist, newlyAddedItem])
    setNewItem('')
}

const handleDelete = async (evt) => {
    evt.preventDefault()
    const checklistItem = await checklistAPI.deleteItem(evt)
    setChecklist(checklist => checklist.filter(item => item._id !== checklistItem._id))
    //this bothered me so much because i forgot that when i pass it into the API it had to match the :id 

}

const handleChange = (evt) => {
  evt.preventDefault()
  setNewItem(evt.target.value)
}

  return (
  <>
<form onSubmit={handleAddItem}>
<div className="h-screen w-full bg-gradient-to-t dark:bg-gray-300">
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="ml-[0px] text-3xl text-left text-grey-darkest">My Checklist</h1>
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
</div>
</form>
    </>
  )
}
