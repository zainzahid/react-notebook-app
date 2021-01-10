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
        <div className="p-1 detail-section p-1">
            <div className="detail-section-btn my-1">
                {/* <a className="detail-section-btn-save" onClick={ () => closeEditing() }><i class="fa fa-save"></i></a><br/>     */}
                <a href="!#" className="detail-section-btn-delete" onClick={ () => _deleteNote(note.id) }><i class="fa fa-trash"></i></a><br/>
                <a href="!#" className="detail-section-btn-close" onClick={ () => closeEditing() }>&#10006;</a>    
            </div>
            <input className="detail-section-title" type="text" value={note.title} onChange={e => handleChange({title: e.target.value})}></input>
            <input className="detail-section-cat" type="text" value={note.category} onChange={e => handleChange({category: e.target.value})}></input>
            <textarea className="detail-section-content" value={note.content} onChange={e => handleChange({content: e.target.value})} rows="10"></textarea>
        </div>
    )
}

export default NoteEdit
