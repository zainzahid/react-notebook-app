import React, { useContext } from 'react'
import { NotesContext } from './App'

function Note({note}) {

    const { handleNoteActive } = useContext(NotesContext);
    return (
        <div className="note-card bg-white my-1" onClick={() => {handleNoteActive(note.id)}}>
            <span className="color-strip"></span>
            <p>{note.title}</p>
        </div>
    )
}

export default Note
