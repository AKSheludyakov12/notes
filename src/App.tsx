import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import uuid from "react-uuid";
import randomColor from "randomcolor";
import NotePage from "./components/NotePage";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const [title, setTitle] = useState('');
const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleNewNoteSubmit(title, text, setTitle, setText) {
    if (text.trim() !== ""){
    const newNote = {
      id: uuid(),
      noteTitle: title,
      noteText: text,
      color: randomColor({
        luminosity: "light",
      }),
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setText('');
    }
  }

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

const handeEditNoteSubmit = (id, newTitle, newText) => {
  setNotes((prevNotes) =>{
    return prevNotes.map((note) =>{
      if (note.id === id){
        return {
          ...note,
          noteTitle: newTitle,
          noteText: newText
        }
      }
      return note
    })
  })
}

  return (
    <div className="App">
 
        <Routes>
          <Route path="/" element={<NoteList notes={notes} onDeleteNote={handleDeleteNote} />} />
          <Route
            path="/NewNote"
            element={<NewNote onNewNoteSubmit={handleNewNoteSubmit}  />}
          />
          <Route path="/Note/:id" element={<NotePage  notes={notes} onEditNote={handeEditNoteSubmit} setTitle={setTitle} setText={setText} text={text} title={title} /> }></Route>
    
        </Routes>
  
    </div>
  );
}

export default App;
