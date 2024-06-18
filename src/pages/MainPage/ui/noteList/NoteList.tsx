import React from "react"
import cls from "./NoteList.module.scss" 
import { Link } from "react-router-dom"
import { Button, ButtonTheme } from "components/ui/button/MyButton"
import { DeleteSVG } from "shared"
import { noteSchema } from "App/Providers/Redux/config/StateScheme"
import { useDispatch } from "react-redux"
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice"

interface NoteListProps {
    id: number,
    backgroundColor: string,
    note: noteSchema,
  
  

}

export const NoteList = (props:NoteListProps) => {
  const dispatch = useDispatch()
  const handleDeleteNote = (id:number) => {
    dispatch(NoteDataAction.deleteNote(id))
    }

    const {
        id,
        backgroundColor,
        note,
        ...otherProps
    } = props 
    return ( 

          <li
            className="note"
            key={id}
            style={{ backgroundColor: note.noteBackgroundColor }}
          >
            <Link to={`/Note/${note.id}`}>
              <div className="note-content">
                <div className="note-content__title">{note.noteTitle}</div>
                <div className="note-content__text">{note.noteText}</div>
              </div>
            </Link>
            <Button
            className={cls.delete_button} 
            theme={ButtonTheme.CLEAR}
            >
              <DeleteSVG/>
            </Button>
            
          </li>
        )}


