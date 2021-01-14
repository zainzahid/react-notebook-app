import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from './App';

function NoteList({ notes }) {
    const { addNewNote, isNoteActive } = useContext(NotesContext);

    const classes = ["list-section", "p-1", isNoteActive() ? "div-hide" : "div-show"].join(" ");

    return (
        <div className={classes}>
            <button className="btn-add" onClick={() => addNewNote()}>Add New Note</button>
            {
                notes.map(( note,i) => 
                    <Note key={i} note={note} />
                )
            }
        </div>
    )
}

export default NoteList