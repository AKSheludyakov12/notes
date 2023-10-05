import "./NoteList.css";
import add from "../img/add.svg";

import { Link } from "react-router-dom";
import delet from "../img/delete.svg";
import MyInput from "./ui/input/MyInput";
import { useState, useMemo } from "react";
import NoteListEmpry from "./NoteListEmpty";
import { useNavigate } from "react-router-dom";
const NoteList = (props) => {
  const notes = props.notes;
  console.log(notes);

  const router = useNavigate();
  const [searchQuery, setSearchQuery] = useState([]);

  const serachedNotes = useMemo(() => {
    return notes.filter(
      (note) =>
        note.noteTitle.includes(searchQuery) ||
        note.noteText.includes(searchQuery)
    );
  }, [notes, searchQuery]);

  console.log(serachedNotes);

  const handleDeleteClick = (id) => {
    props.onDeleteNote(id);
  };

  if (props.notes.length ) {
    return (
      <div className="Note-List">
        <header>
          <div className="note-search__input">
            <MyInput
              value={searchQuery}
              placeholder="Search by the keyword..."
              onChange={(e) => setSearchQuery(e.target.value)}
            ></MyInput>
          </div>

          <h1>Notes</h1>
        </header>
        <ul className="notes">
          {serachedNotes.map((note, index, id) => (
            <li
              className="note"
              key={index}
              style={{ backgroundColor: note.color }}
              note={note}
            >
              <a onClick={() => router(`/Note/${note.id}`)}>
                <div className="note-content">
                  {note.noteTitle !== "" ? note.noteTitle : note.noteText}
                </div>
              </a>
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
    );
  } else {
    return <NoteListEmpry />;
  }
};

export default NoteList;
