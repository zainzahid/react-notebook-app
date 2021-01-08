import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from './App';

function NoteList({ notes }) {
    const { addNewNote } = useContext(NotesContext);

    return (
        <div className="note-list-section bg-grey p-1">
            <button onClick={() => addNewNote()}>Add New</button>
            {
                notes.map(( note,i) => 
                    <Note key={i} note={note} />
                )
            }
        </div>
    )
}

export default NoteList
