//NewNotePage.jsx
import React from 'react'
import NoteList from '../../components/NoteList/NoteList'
import * as notesAPI from '../../utilities/notes-api'
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm'
import { useState } from 'react'
import { useEffect } from 'react'

export default function NewNotePage() {

  const [notes, setNotes] = useState(null)  

  useEffect(function() {
    async function getNotes() {
        const notes = await notesAPI.getAllNotes();
        setNotes(notes)
    }
    getNotes();
  },[])

async function handleAddNote(newNote) {
    const updatedNote = await notesAPI.addNote(newNote)
    setNotes([...notes, updatedNote])
}
  return (
    <div>
      { notes ? 
      <>
        <NoteList notes={notes}/>
      </>
        :
        <h1>No Notes Yet</h1>
      }
      <AddNoteForm notes={notes} handleAddNote={handleAddNote}/> 
    </div>
  )
}
