import { ChangeEvent, useState } from "react";
import { Modal } from "shared"
import cls from "./NewNote.module.scss"
export const NewList =  ({isOpen,onClose}) => { 
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(event.target.value);
      };
      const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(event.target.value);
      };
 
    return( 
    <Modal
    isOpen={isOpen}
    onClose={onClose}>
            <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleNoteTitleChange} />
              <div className={cls.note__text}>
              <textarea placeholder='Напишите что-нибудь...' value={noteText} onChange={handleNoteTextChange}></textarea>
            </div>
    </Modal>
    )
}