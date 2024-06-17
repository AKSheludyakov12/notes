import React, { useEffect, useMemo, useState } from "react"
import cls from "./MainPage.module.scss"
import { NoteList } from "./noteList/NoteList"
import { Link } from "react-router-dom"
import { Button, ButtonTheme } from "../../../components/ui/button/MyButton"
import { AddNoteSvg } from "../../../shared"
import { MyInput } from "../../../components/ui/input/MyInput"
import { useDispatch, useSelector } from "react-redux"
import { getNote } from "../../../App/Providers/Redux/selectors/getNotes"
import {  noteData, noteSchema } from "../../../App/Providers/Redux/config/StateScheme"
import { NoteAction } from "../../../App/Providers/Redux/Slice/NoteSlice"
import { NoteDataAction } from "../../../App/Providers/Redux/Slice/NoteDataSlice"
import { NoteListEmpry } from "../../NoteListEmpty/NoteListEmpty"

export const MainPage = ( ) => {
     const dispatch = useDispatch()
    const notes = useSelector(getNote)
    const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    //@ts-ignore
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      dispatch(NoteDataAction.setNotes(savedNotes));
    }
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchQuery(e.target.value)
} 

    const searchedNotes = useMemo(() => {
      dispatch(NoteDataAction.searchNote(searchQuery))
    }, [notes, searchQuery])


    const handleDeleteNote = (id) => {
      dispatch(NoteDataAction.deleteNote(id))
      }

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
          {!notes ? <NoteListEmpry/>
          :
            <ul className="notes">
            {searchedNotes.map((note, index) => (
              <NoteList
              note={note}
              id={index}
              backgroundColor={note.noteBackgroundColor}
              onClick={handleDeleteNote}/>
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