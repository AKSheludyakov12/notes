import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./App.scss"
import "./NewNote.scss"
import "./NoteList"
import back from '../img/back.svg';
import save from '../img/save.svg';
import { Button } from "./ui/button/MyButton"
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
  <div className='container'>
    <div className='new-note'  >
      <form className='new-note__form'>
        <div className='new-note__buttom'>
            <div className='new-note__back' onClick={handleSubmit} ><Link to="/"><Button  ><img src={back} ></img></Button></Link></div>
       
        </div>
        <div className='new-note__title'>
          <MyInput type='text' placeholder='Title' value={noteTitle} onChange={handleNoteTitleChange} ></MyInput>
        </div>
        <div className='new-note__text'>
        <textarea placeholder='Type something...' value={noteText} onChange={handleNoteTextChange}></textarea>
        
        </div>
      </form>
      </div>
      </div>
)
}

export default NewNote