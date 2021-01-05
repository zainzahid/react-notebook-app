import '../css/App.css';
import NoteList from './NoteList';
import NoteDetail from './NoteDetail'
import NoteEdit from './NoteEdit'
import React,{ useState } from 'react';

export const NotesContext = React.createContext()

function App() {
  const [noteList, setNoteList] = useState(exampleNoteList);

  const [activeNoteId, setActiveNoteId] = useState();
  const activeNote = noteList.find(note => note.id === activeNoteId);
  console.log('activeNote-->', activeNote);

  const [editMode, setEditMode] = useState(false);

  const notesContextValue = {
    handleNoteActive,
    openNoteEdit,
    closeNoteActive,
    closeNoteEdit
  }

  function handleNoteActive(id) {
    console.log('handle is called for', id);
    setEditMode(false);
    setActiveNoteId(id);
  }

  function closeNoteActive(id) {
    console.log('handle is called for', id);
    setEditMode(false);
    setActiveNoteId(undefined);
  }

  function openNoteEdit(id) {
    setEditMode(true);
    console.log('edit note', id)
  }
  function closeNoteEdit(id) {
    setEditMode(false);
  }

  return (
    <NotesContext.Provider value={notesContextValue}>
      <NoteList notes={noteList} />
      
      <br/>
      {
        activeNote && !editMode && <NoteDetail note={activeNote}  />
      }
      {
        activeNote && editMode && <NoteEdit note={activeNote}  />
      }
      
    </NotesContext.Provider>
  );
}

const exampleNoteList = [{
  id: 1,
  title: 'Note 1',
  category: 'Important',
  content: 'This is very important note.'
},
{
  id: 2,
  title: 'Note 2',
  category: 'Education',
  content: 'This is very education note.'
}];

export default App;
