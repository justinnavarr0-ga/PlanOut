import React from 'react'
import NewNote from '../../components/NewNote/NewNote'
export default function NoteList({notes}) {
   const allNotes = notes.map((n, idx) => <NewNote note={n} key={idx}/>)
  return (
    <div>
       {allNotes}
    </div>
  )
}
