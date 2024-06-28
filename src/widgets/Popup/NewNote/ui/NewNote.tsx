import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "shared"
import cls from "./NewNote.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { StateSchema } from "App/Providers/Redux/config/StateScheme";

interface NoteProps {
  isOpen:boolean,
  onClose: ()=>void,
  newNote: boolean,
  noteText?: string,
  noteTitle?: string,
  noteId?:string; 
  setNewNoteModal?: Dispatch<React.SetStateAction<boolean>>
  setNoteText?: Dispatch<SetStateAction<string>>
  setNoteTitle?: Dispatch<SetStateAction<string>>
}

export const NewNote =  (props:NoteProps) => {
  const dispatch = useDispatch()

  const {isOpen,
    onClose,
    setNewNoteModal,
    newNote,
    noteText,
    setNoteText, 
    setNoteTitle, 
    noteId,
    noteTitle
  } = props 
  const [newText, setNewText] = useState('');
  const [newTitle, setNewTitle] = useState('');


    const handlerCloseModal = () => { 
      if(newTitle === "" && newText === ""){
        dispatch(NoteDataAction.deleteNote(noteId))
      }
      setNewNoteModal(false)
    }



      const handleUpdateNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newNoteText = event.target.value;
        setNewText(newNoteText);
        setNoteText ? setNoteText(newNoteText) : setNewText(newNoteText)
        setTimeout(() => dispatch(NoteDataAction.updateNoteText({id:noteId, text:newNoteText})));

        };
        const handleUpdateNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
          const newNoteTitle = event.target.value;
          setNoteTitle ? setNoteTitle(newNoteTitle) : setNewTitle(newNoteTitle)
 
          setTimeout(() => dispatch(NoteDataAction.updateNoteTitle({id:noteId, text:newNoteTitle})), 400);
        };

if(newNote){
  return( 
    <Modal
    isOpen={isOpen}
    onClose={handlerCloseModal}
    >
            <input type='text' placeholder='Заголовок' value={newTitle} onChange={handleUpdateNoteTitleChange} className={cls.note__title}/>
              <div className={cls.note__text}>
              <textarea placeholder='Напишите что-нибудь...' value={newText} onChange={handleUpdateNoteTextChange} className={cls.note__text}></textarea>
            </div>
    </Modal>
    )
}
return (
  <Modal
  isOpen={isOpen}
  onClose={onClose}
  >
          <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleUpdateNoteTitleChange} className={cls.note__title}/>
            <div className={cls.note__text}>
            <textarea placeholder='Напишите что-нибудь...' value={noteText} onChange={handleUpdateNoteTextChange} className={cls.note__text}></textarea>
          </div>
  </Modal>
)
  }