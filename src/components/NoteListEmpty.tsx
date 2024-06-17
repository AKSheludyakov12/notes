import empty from "../img/rafiki.png";
import React from "react";
import add from "../img/add.svg";
import { Link } from "react-router-dom";

const NoteListEmpry = () =>{
    return (

  <div className="Note-List">
  <h1>Notes</h1>
  <div className="new-note__empty">
  <img src={empty}></img>
    <p>Create your first note !</p>
  </div>
  <Link to="/NewNote">
      <button className="new-note_add button-form">
        <img src={add} />
      </button>
    </Link>
</div>
    )
}

export default NoteListEmpry