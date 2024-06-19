import { ChangeEvent, useState } from "react";
import { Modal } from "shared"
import cls from "./NewNote.module.scss"
import { useDispatch } from "react-redux";
import randomColor from "randomcolor"
import { on } from "events";

export const NewNote =  ({isOpen,onClose, onAddNewNote, setIsOpenPopup, setNewNoteModal}) => { 
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
        const newNote = {noteTitle, noteText, noteBackgroundColor}
        onAddNewNote(newNote)
        setIsOpenPopup(false)
        setNewNoteModal(false)
      }
    return( 
    <Modal
    isOpen={isOpen}
    onClose={saveNote}>

            <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleNoteTitleChange} className={cls.note__title}/>
              <div className={cls.note__text}>
              <textarea placeholder='Напишите что-нибудь...' value={noteText} onChange={handleNoteTextChange} className={cls.note__text}></textarea>
            </div>
    </Modal>
    )
}