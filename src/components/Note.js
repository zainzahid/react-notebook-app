import React, { useContext } from 'react'
import { NotesContext } from './App'

function Note({note}) {

    const { handleNoteActive } = useContext(NotesContext);
    return (
        <div onClick={() => {handleNoteActive(note.id)}}>
            {note.title}
        </div>
    )
}

export default Note
