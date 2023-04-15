//Add NoteForm.jsx
import React from 'react'
import { useState } from 'react'

export default function AddNoteForm({handleAddNote}) {
const [newNote, setNewNote] = useState()

const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddNote(newNote)
}

const handleChange = (evt) => {
  setNewNote(evt.target.value)
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Add a note here </h3>
        <input type='text' name='note' value={newNote} onChange={handleChange}/>
         <button type='submit'>Add note</button>
         </form>
    </div>
  )
}
