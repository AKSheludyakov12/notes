import "./NoteList.scss";
import add from "../img/add.svg";
import "./App.scss"
import { Link } from "react-router-dom";
import delet from "../img/delete.svg";
import MyInput from "./ui/input/MyInput";
import { useState, useMemo } from "react";
import NoteListEmpry from "./NoteListEmpty";
import { useNavigate } from "react-router-dom";
const NoteList = (props) => {
  const notes = props.notes;

  const router = useNavigate();
  const [searchQuery, setSearchQuery] = useState([]);

  const searchedNotes = useMemo(() => {
    return notes.filter(
      (note) =>
        note.noteTitle.includes(searchQuery) ||
        note.noteText.includes(searchQuery)
    );
  }, [notes, searchQuery]);

  console.log(searchedNotes);

  const handleDeleteClick = (noteId) => {
    props.onDeleteNote(noteId);
  };

  if (props.notes.length ) {
    return (
      <div className="container">
        <div className="Note-List">
          <header>
            <MyInput
              value={searchQuery}
              placeholder="Search by the keyword..."
              onChange={(e) => setSearchQuery(e.target.value)}
            ></MyInput>
            <h1>Notes</h1>
          </header>
          <ul className="notes">
            {searchedNotes.map((note, index) => (
              <li
                className="note"
                key={index}
                style={{ backgroundColor: note.color }}
                note={note}
              >
                <Link to={`/Note/${note.id}`}>
                  <div className="note-content">
                    <div className="note-content__title">{note.noteTitle}</div>
                    <div className="note-content__text">{note.noteText}</div>
                  </div>
                </Link>
                <img
                  className="note-delete_button"
                  src={delet}
                  onClick={() => handleDeleteClick(note.id)}
                ></img>
              </li>
            ))}
            <Link to="/NewNote">
              <button className="new-note_add button-form">
                <img src={add} />
              </button>
            </Link>
          </ul>
        </div>
      </div>
    );
  } else {
    return <NoteListEmpry />;
  }
};

export default NoteList;
