import React, {useState, useEffect, ChangeEvent, TextareaHTMLAttributes, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../../components/ui/button/MyButton"
import { useDispatch } from 'react-redux';
import randomColor from "randomcolor"
import { BackSVG } from '../../shared';
import cls from "./NewNote.module.scss"
import { NoteDataAction } from 'App/Providers/Redux/Slice/NoteDataSlice';

interface NewNoteProps {

}
const NewNote = ({ notes }) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const dispatch = useDispatch();

  const handleNewNoteSubmit = () => {
    if (noteText.trim() !== "") {
      const newNote = {
        id: Math.random(), // Генерируем случайный id для новой заметки
        noteTitle,
        noteText,
        noteBackgroundColor: randomColor({ luminosity: "light" }),
      };
      const updatedNotes = {
        noteData: [...notes, newNote]
      };
      dispatch(NoteDataAction.setNotes(updatedNotes));
      setNoteTitle('');
      setNoteText('');
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNewNoteSubmit();
  };

  const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(event.target.value);
  };

  return (
      <div className={cls.NewNote}>
        <form className={cls.note__form} onSubmit={handleSubmit}>
          <div className={cls.note__button}>
            <Link to="/"><Button><BackSVG/></Button></Link>
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