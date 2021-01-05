import React, { useContext } from 'react';
import { NotesContext } from './App';

function NoteDetail({ note }) {
    const { openNoteEdit, closeNoteActive } = useContext(NotesContext);
    return (
        <div onClick={() => {openNoteEdit(note.id)}}>
            <button onClick={ () => { closeNoteActive()} }>Close</button><br/>
            <h3>Note Detail</h3>
            <div>{note.title}</div><br/>
            <div>{note.category}</div><br/>
            <div>{note.content}</div>
        </div>
    )
}

export default NoteDetail
