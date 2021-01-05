import React from 'react'
import Note from './Note'

function NoteList({ notes }) {
    return (
        <div>
            {
                notes.map(( note,i) => 
                    <Note key={i} note={note} />
                )
            }
        </div>
    )
}

export default NoteList
