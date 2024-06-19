import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { StateSchema, noteData, noteSchema } from "App/Providers/Redux/config/StateScheme";
import { ChangeEvent, HtmlHTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MainPage.module.scss"
import { Header } from "widgets/header";
import { NoteList } from "./noteList/NoteList";
import { AddNoteSvg, Modal } from "shared";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { Popup } from "widgets/Popup";



  export const MainPage = ( ) => {
      const dispatch = useDispatch()
      const [serchValue, setSerchValue] = useState(" ")
      const searchNote = useSelector((state:StateSchema)=>state.noteData.searchNote)
      const noteData = useSelector((state:StateSchema)=>state.noteData.noteData)
      const [notes, setNotes] = useState([])
      const [isOpenPopup, setIsOpenPopup] = useState(false);

      const todoList = useSelector((state: StateSchema)=>state.todoData.todoData)
      console.log(todoList)
      

      const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch(NoteDataAction.searchNote((e.target.value)))
        setSerchValue(e.target.value)
      }
      

      
      const addNewNote = useCallback((newNote: noteSchema) => {
        dispatch(NoteDataAction.addNote(newNote));
        
        
      }, [dispatch]);
      
      useEffect(()=>{setNotes(serchValue === " " ? noteData :searchNote)},
      [dispatch, addNewNote, noteData, searchNote,serchValue, NoteDataAction.deleteNote])
      return ( 
        
          <div className={cls.MainPage}>
              <Header onChangeInput={onChangeInput}/>
                <ul className={cls.notes}>
                {notes.map((note, index) => (
                  <NoteList
                  note={note}
                
              />
                ))}
            
              </ul>
              {isOpenPopup && <Popup isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}
              onAddNewNote={(newNote)=>addNewNote(newNote)} />}

              <Button theme={ButtonTheme.CIRCLE} 
              className={cls.pozition_button}
              onClick={()=>setIsOpenPopup(!isOpenPopup)}>
                <AddNoteSvg/>
              </Button>
        </div>
      )
  }