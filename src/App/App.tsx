import "./App.css";

import {  Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import NewNote from "../pages/NewNotePage/NewNote";
import uuid from "react-uuid";
import NotePage from "../components/NotePage";
import { MainPage } from "../pages/MainPage/ui/MainPage";

// const handeEditNoteSubmit = (id, newTitle, newText) => {
//   setNotes((prevNotes) =>{
//     return prevNotes.map((note) =>{
//       if (note.id === id){
//         return {
//           ...note,
//           noteTitle: newTitle,
//           noteText: newText
//         }
//       }
//       return note
//     })
//   })
// }
const  App = () => {

const notes = []

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
        {/* <Routes>
          <Route path="/" element={<MainPage  />} />
          <Route
            path="/NewNote"
            element={<NewNote  notes={notes}  />}
          />
          <Route path="/Note/:id" element={<NotePage  notes={notes}  /> }></Route>
    
        </Routes> */}
  <MainPage/>
    </div>
  );
}

export default App
