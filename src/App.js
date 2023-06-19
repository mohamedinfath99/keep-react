import React, { useState } from 'react';
import Header from './Components/Header/Header';
import CreateNote from './Components/CreateNote/CreateNote';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <Header />

      <CreateNote addNote={addNote} />

      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))};

      <Footer />
    </div>
  );
};

export default App;