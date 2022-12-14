
import './App.css';
import Header from './Components/Header/Header';
import CreateNode from './Components/CreateNote/CreateNote';
import React,{ useState } from 'react';
import Note from './Components/Note/Note';



function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }


  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((index) => {
        return index !== id;
      });
    });
  };


  return (
    <div className="App">
      <Header />
      <CreateNode  addNote={addNote} />

      {notes.map((note, index) =>{
        return <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
        
      } )}

    </div>
  );
}

export default App;
