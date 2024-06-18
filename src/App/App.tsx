
import {  Route, Routes } from "react-router-dom";
import "./style/index.scss"
import { useEffect } from "react";
import { MainPage } from "../pages/MainPage/ui/MainPage";
import NewNote from "pages/NewNotePage/NewNote";
import { getNote } from "./Providers/Redux/selectors/getNotes";
import { useSelector } from "react-redux";

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

const notes = useSelector(getNote)
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<MainPage  />} />
          <Route
            path="/NewNote"
            element={<NewNote  notes={notes}  />}
          />
          {/* <Route path="/Note/:id" element={<NotePage  notes={notes}  /> }></Route> */}
    
        </Routes>
  <MainPage/>
    </div>
  );
}

export default App
