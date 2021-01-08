import React, { useContext } from 'react';
import { NotesContext } from './App';

function NoteEdit({note}) {
    const { closeNoteEdit, handleNoteChange, deleteNote } = useContext(NotesContext);

    const handleChange = (updatedNote) => {
        /* passing overrighting note with updated note & passing to handleNoteChange Fn
        in App component which will update noteList state */
        handleNoteChange(note.id, {...note, ...updatedNote});
    }

    const closeEditing = () => {
        // if user leave new note empty, draft it with title 'New Note'
        if (note.title === '') {
            handleChange({title: 'New Note'})
        }
        closeNoteEdit();
    }

    const _deleteNote = () => {
        closeEditing();
        deleteNote(note.id);
    }

    return (
        <div className="p-1">
            <button onClick={ () => closeEditing() }>Close</button>
            <button onClick={ () => _deleteNote(note.id) }>Delete</button><br/>
            <input type="text" value={note.title} onChange={e => handleChange({title: e.target.value})}></input><br/>
            <input type="text" value={note.category} onChange={e => handleChange({category: e.target.value})}></input><br/>
            <textarea value={note.content} onChange={e => handleChange({content: e.target.value})}></textarea>
        </div>
    )
}

export default NoteEdit
