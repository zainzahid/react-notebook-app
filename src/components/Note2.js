import React, { useContext } from 'react'
import { NotesContext } from './App'

function Note({note}) {

    const { handleNoteActive } = useContext(NotesContext);

    /* we want to show note only when it have non empty title */
    function isNoteTitleEmpty() {
        return note.title === "";
    }
 
    return (
        <>
        { 
            !isNoteTitleEmpty() &&
            <div className="note-card bg-white" onClick={() => {handleNoteActive(note.id)}}>
                <div className="note-info">
                    <p className="note-info-item">
                        <i className="fa fa-list-alt" aria-hidden="true"></i> {note.category}
                        </p>
                    <p className="note-info-item">
                        <i className="fa fa-calendar" aria-hidden="true"></i> {note.date}
                    </p>
                </div>

                <p>{note.title}</p>
            </div>
        }
        </>
    )
}

export default Note
