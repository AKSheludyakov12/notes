import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { StateSchema, noteData, noteSchema } from "App/Providers/Redux/config/StateScheme";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MainPage.module.scss"
import { MyInput } from "components/ui/input/MyInput";
import { Header } from "widgets/header";
import { NoteListEmpty } from "pages/NoteListEmpty/NoteListEmpty";
import { NoteList } from "./noteList/NoteList";
import { AddNoteSvg, Modal } from "shared";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { Link } from "react-router-dom";
import { Popup } from "widgets/Popup";



export const MainPage = ( ) => {
     const dispatch = useDispatch()
     const notes = useSelector((state:StateSchema)=>state.noteData.noteData)
    const searchNote = useSelector((state:StateSchema)=>state.noteData.searchNote)
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const onChangeInput = (e) =>{
      dispatch(NoteDataAction.searchNote((e.target?.value)))
    }
    

    const addNewNote = (newNote) => {
      dispatch(NoteDataAction.addNote(newNote));
    }

    useEffect(()=>{console.log("обновлися")},[searchNote,notes, dispatch])
    
console.log(isOpenPopup)
    
    return ( 
      
        <div className={cls.MainPage}>
            <Header onChangeInput={onChangeInput}/>
              <ul className={cls.notes}>
              {searchNote.map((note, index) => (
                <NoteList
                note={note}
              
            />
              ))}
          
            </ul>
            {isOpenPopup && <Popup isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />}

            <Button theme={ButtonTheme.CIRCLE} 
            className={cls.pozition_button}
            onClick={()=>setIsOpenPopup(!isOpenPopup)}>
              <AddNoteSvg/>
            </Button>
      </div>
    )
}