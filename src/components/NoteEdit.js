import React, { useContext } from 'react';
import { NotesContext } from './App';

function NoteEdit({note}) {
    const { closeNoteEdit } = useContext(NotesContext);
    return (
        <div>
            <button onClick={ () => { closeNoteEdit()} }>Close</button><br/>
            <input value={note.title}></input><br/>
            <input value={note.category}></input><br/>
            <textarea value={note.content} ></textarea>
        </div>
    )
}

export default NoteEdit
