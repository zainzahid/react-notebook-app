import React, { useContext } from 'react'
import { NotesContext } from './App'

function Note({note}) {

    const { handleNoteActive } = useContext(NotesContext);
    return (
        <div className="note-card bg-white" onClick={() => {handleNoteActive(note.id)}}>
            <div className="note-info">
                <p className="note-info-item">
                    <i className="fa fa-list-alt" aria-hidden="true"></i> {note.category !=="" ? note.category: "No Category"}
                    </p>
                <p className="note-info-item">
                    <i className="fa fa-calendar" aria-hidden="true"></i> {note.date}
                </p>
            </div>

            <p>{note.title !== "" ? note.title: "New Note"}</p>
        </div>
    )
}

export default Note
