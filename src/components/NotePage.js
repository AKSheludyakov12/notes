
import { Link, useParams } from "react-router-dom";
import redact from "../img/mode.svg"
import back from "../img/back.svg";
import save from "../img/save.svg"
import "./App.scss"
import "./NewNote.scss";
import MyButton from "./ui/button/MyButton";
import "./NotePage.scss";
import { useState } from "react";
import MyInput from "./ui/input/MyInput";

const NotePage = (props) => {
 
  const { id } = useParams();
  const [editNoteText, setEditNoteText] = useState(false);
  const note = props.notes.find((note) => note.id === id);
  const [updatedTitle, setUpdatedTitle] = useState(note ? note.noteTitle : "");
  const [updatedText, setUpdatedText] = useState(note ? note.noteText : "");

 
const handleEditNoteSubmit = () => {
  if (updatedTitle !== note.noteTitle || updatedText !== note.noteText) {
    props.onEditNote(id, updatedTitle, updatedText);
  }
  setEditNoteText(true);
};

console.log(editNoteText)
  return (
    <div className='container'>
    <div className="new-note">
      <form className="new-note__form">
        <div className="new-note__buttom">
          
            <Link to="/">
              <MyButton>
                <img
                  src={back}
                ></img>
              </MyButton>
              
            </Link>
            
     
          {editNoteText && <MyButton onClick={handleEditNoteSubmit}><img src={save}/></MyButton>}
        </div>
        <div>
          <div className="page-note__content">
          <div className="page-note__title" onClick={() => setEditNoteText(true)}>
            {editNoteText ? (
              
                <MyInput
                  type="text"
                  value={updatedTitle}
                  placeholder={note ? note.noteTitle : ""}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />

            ) : (
              <h1>{note ? note.noteTitle : ""}</h1>
            )}
          </div>
          <div
            className="page-note__text "
            onClick={() => setEditNoteText(true)}
          >
            {setEditNoteText ? (
              <textarea
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            >
              {note ? note.noteText : ""}
            </textarea>
            ) : (
              <p>{note.noteText}</p>
            )}
          </div>
          </div>
      
        </div>
      </form>
    </div>
    </div>
  );
};

export default NotePage;  
