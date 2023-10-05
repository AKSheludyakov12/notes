import redact from "../img/mode.svg";
import { Link } from "react-router-dom";
import back from "../img/back.svg";
import NoteList from "./NoteList";
import "./NewNote.css";
import { useLocation, useHistory, usep } from "react-router-dom";
import MyButton from "./ui/button/MyButton";
import { useParams } from "react-router-dom";
const NotePage = (props) => {
  console.log(props)
  const { id } = useParams();
  
  const note = props.notes.find((note) => note.id === id);

  

  return (
    <div className="new-note">
      <form className="new-note__form">
        <div className="new-note__buttom">
          <div className="new-note__back">
            <Link to="/">
              <MyButton Link to="/notes">
                <img src={back}></img>
              </MyButton>
            </Link>
          </div>
          <MyButton>
            <img src={redact}></img>
          </MyButton>
        </div>
        <div>
          <div className="page-note__title">
            <h1>{note.noteTitle}</h1>
          </div>
          <div className="page-note__text">{note.noteText}</div>
        </div>
      </form>
    </div>
  );
};

export default NotePage;
