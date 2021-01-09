import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from './App';

function NoteList({ notes }) {
    const { addNewNote } = useContext(NotesContext);

    return (
        <div className="list-section p-1">
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
