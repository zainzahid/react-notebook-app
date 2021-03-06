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
    closeNoteEdit,
    handleNoteChange,
    addNewNote,
    deleteNote,
    isNoteActive
  }

  function handleNoteActive(id) {
    setEditMode(false);
    setActiveNoteId(id);
    
  }

  function closeNoteActive(id) {
    setEditMode(false);
    setActiveNoteId(undefined);
  }

  function openNoteEdit(id) {
    setEditMode(true);
  }

  function closeNoteEdit(id) {
    setEditMode(false);
  }

  function handleNoteChange(id, updatedNote) {
    // Cloning noteList
    const tempNoteList = [...noteList];
    // finding index on which note need update
    const index = tempNoteList.findIndex(note => note.id === id);
    // updating note on found index
    tempNoteList[index] = updatedNote;
    // updating noteListState with updated tempNoteList
    setNoteList(tempNoteList);
  }

  function addNewNote() {
    const newNote = {
      id:  new Date().toString(),
      title: '',
      category: '',
      content: '',
      date: new Date().toLocaleDateString()
    };
    setNoteList([...noteList, newNote]);
    setEditMode(true);
    setActiveNoteId(newNote.id);
  }

  function deleteNote(id) {
    setNoteList(noteList.filter(note => note.id !== id));
  }

  function isNoteActive() {
    return activeNote === undefined ? false: true;
  }

  return (
    <NotesContext.Provider value={notesContextValue}>
      <div className="sections-container">
        <NoteList notes={noteList} />
    
        {
          isNoteActive() && !editMode && <NoteDetail note={activeNote}  />
        }
        {
          isNoteActive() && editMode && <NoteEdit note={activeNote}  />
        }
      </div>
      
    </NotesContext.Provider>
  );
}

const exampleNoteList = [];

export default App;
