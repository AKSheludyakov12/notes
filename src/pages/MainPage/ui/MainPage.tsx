import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { StateSchema } from "App/Providers/Redux/config/StateScheme";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MainPage.module.scss"
import { MyInput } from "components/ui/input/MyInput";
import { NoteListEmpty } from "pages/NoteListEmpty/NoteListEmpty";
import { NoteList } from "./noteList/NoteList";
import { AddNoteSvg } from "shared";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { Link } from "react-router-dom";



export const MainPage = ( ) => {
     const dispatch = useDispatch()
     const notes =[ useSelector((state:StateSchema)=>state.noteData)]
    const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    //@ts-ignore
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      dispatch(NoteDataAction.setNotes(savedNotes));
    }
  }, [dispatch]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchQuery(e.target.value)
} 

    useMemo(() => {
      dispatch(NoteDataAction.searchNote(searchQuery))
    }, [notes, searchQuery])



    return ( 
        <div className={cls.MainPage}>
          <header>
            <MyInput
              value={searchQuery}
              placeholder="Search by the keyword..."
              onChange={onChangeInput}
            ></MyInput>
            <h1>Notes</h1>
          </header>
          {!notes ? <NoteListEmpty/>
          :
            <ul className="notes">
            {notes.map((note, index) => (
              <NoteList
              note={note}
              id={index}
              backgroundColor={note.noteBackgroundColor}
          />
            ))}
        
      
          </ul>
          }
          <Link to="/NewNote">
            <Button theme={ButtonTheme.CIRCLE} 
            className="pozition_button">
              <AddNoteSvg/>
            </Button>
          </Link>
      </div>
    )
}