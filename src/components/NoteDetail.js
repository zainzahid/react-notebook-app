import React, { useContext } from 'react';
import { NotesContext } from './App';

function NoteDetail({ note }) {
    const { openNoteEdit, closeNoteActive } = useContext(NotesContext);
    return (
        <div className="p-1" onClick={() => {openNoteEdit(note.id)}}>
            <button onClick={ () => { closeNoteActive()} }>Close</button><br/>
            <div>{note.title}</div>
            <div>{note.category}</div>
            <div>{note.content}</div>
        </div>
    )
}

export default NoteDetail
