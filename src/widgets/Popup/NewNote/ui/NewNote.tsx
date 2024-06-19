import { ChangeEvent, useState } from "react";
import { Modal } from "shared"
import cls from "./NewNote.module.scss"
import { useDispatch } from "react-redux";
import randomColor from "randomcolor"
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
export const NewNote =  ({isOpen,onClose}) => { 
  const dispatch = useDispatch()
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const noteBackgroundColor = randomColor({
      luminosity: 'light',
   });
    const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(event.target.value);
      };
      const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(event.target.value);
      };
      const saveNote =() => {
        dispatch(NoteDataAction.addNote({noteText, noteTitle, noteBackgroundColor}))

      }
    return( 
    <Modal
    isOpen={isOpen}
    onClose={onClose}>
      <button onClick={saveNote}>сохранить</button>
            <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleNoteTitleChange} className={cls.note__title}/>
              <div className={cls.note__text}>
              <textarea placeholder='Напишите что-нибудь...' value={noteText} onChange={handleNoteTextChange}></textarea>
            </div>
    </Modal>
    )
}