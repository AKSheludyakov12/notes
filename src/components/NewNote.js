import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./NewNote.css"
import "./NoteList"
import back from '../img/back.svg';
import save from '../img/save.svg';
import MyButton from "./ui/button/MyButton"
import MyInput from './ui/input/MyInput';



const NewNote = (props) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('')

    function handleNoteTextChange(event) {
        setNoteText(event.target.value);
    
      }
      function handleNoteTitleChange(event) {
        setNoteTitle(event.target.value);
        console.log(event.target.value)
      }

   
      function handleSubmit(event) {
        event.preventDefault();
        props.onNewNoteSubmit(noteTitle, noteText, setNoteTitle, setNoteText);
        setNoteTitle('');
        setNoteText('');
      }

return (
    <div className='new-note'  onSubmit={handleSubmit}>
      <form className='new-note__form'>
        <div className='new-note__buttom'>
            <div className='new-note__back'><Link to="/"><MyButton  Link to="/notes"><img src={back} ></img></MyButton></Link></div>
        <MyButton  ><img src={save}></img></MyButton>
        </div>
        <div className='new-note__title'>
          <MyInput type='text' placeholder='Title' value={noteTitle} onChange={handleNoteTitleChange} ></MyInput>
        </div>
        <div className='new-note__text'>
        <textarea  type='text' placeholder='Type something...' value={noteText} onChange={handleNoteTextChange}></textarea>
        
        </div>
      </form>
      </div>
)
}

export default NewNote