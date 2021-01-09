import React, { useContext } from 'react';
import { NotesContext } from './App';

function NoteDetail({ note }) {
    const { openNoteEdit, closeNoteActive } = useContext(NotesContext);
    return (
        <div className="p-1 detail-section" onClick={() => {openNoteEdit(note.id)}}>
            <div className="detail-section-btn">
                <a className="detail-section-btn-edit" onClick={ () => {openNoteEdit(note.id)} }><i class="fa fa-edit"></i></a>
                <a className="detail-section-btn-close" onClick={ () => { closeNoteActive()} }>&#10006;</a>
            </div>
            <h3 className="detail-section-title">{note.title}</h3>
            <h4 className="detail-section-cat">{note.category} &nbsp; &#8226; &nbsp; {note.date}</h4>
            <p className="detail-section-content">{note.content}</p>
        </div>
    )
}

export default NoteDetail
