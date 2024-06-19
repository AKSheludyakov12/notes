  import React, {useState, useEffect, ChangeEvent, TextareaHTMLAttributes, FormEvent} from 'react';
  import { Link } from 'react-router-dom';
  import { Button } from "../../components/ui/button/MyButton"
  import { useDispatch, useSelector } from 'react-redux';
  import randomColor from "randomcolor"
  import { BackSVG } from '../../shared';
  import cls from "./NewNote.module.scss"
  import { NoteDataAction } from 'App/Providers/Redux/Slice/NoteDataSlice';
  import { StateSchema, noteData } from 'App/Providers/Redux/config/StateScheme';


  const NewNote = () => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const notes = useSelector((state: noteData)=> state.noteData )
    const dispatch = useDispatch();
    const noteBackgroundColor = randomColor({
      luminosity: 'light',
   });



    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addNewNote()
    };

    const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setNoteText(event.target.value);
    };

    const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNoteTitle(event.target.value);
    };


    const addNewNote = () => {
      
      dispatch(NoteDataAction.addNote({noteText, noteTitle, noteBackgroundColor}))
      
    }
console.log(notes)
    return (
        <div className={cls.NewNote}>
          <form className={cls.note__form} onSubmit={handleSubmit}>
            <div className={cls.note__button}>
              <Button
              onClick={addNewNote}><BackSVG/></Button>
            </div>
            <div className={cls.note__title}>
              <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleNoteTitleChange} />
            </div>
            <div className={cls.note__text}>
              <textarea placeholder='Напишите что-нибудь...' value={noteText} onChange={handleNoteTextChange}></textarea>
            </div>
            <button type="submit">Сохранить заметку</button>
          </form>
        </div>
    );
  };

  export default NewNote;