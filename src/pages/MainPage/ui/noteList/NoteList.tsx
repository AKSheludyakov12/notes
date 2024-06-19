import React from "react"
import cls from "./NoteList.module.scss" 
import { Link } from "react-router-dom"
import { Button, ButtonTheme } from "components/ui/button/MyButton"
import { DeleteSVG } from "shared"
import { noteSchema } from "App/Providers/Redux/config/StateScheme"
import { useDispatch } from "react-redux"
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice"

interface NoteListProps {
  note: noteSchema;
}

export const NoteList = (props:NoteListProps) => {
  const dispatch = useDispatch()


    const {
        note,
        ...otherProps
    } = props 
    return ( 

          <li
            className={cls.note}
            key={note.id}
            style={{ backgroundColor: note.noteBackgroundColor }}
          >
            <Link to={`/Note/${note.id}`}>
              <div className={cls.content}>
                <div className={cls.title}>{note.noteTitle}</div>
                <div className={cls.text}>{note.noteText}</div>
              </div>
            </Link>
            <Button
            className={cls.delete_button} 
            theme={ButtonTheme.CLEAR}
            onClick={()=>dispatch(NoteDataAction.deleteNote(note.id))}
            >
              <DeleteSVG/>
            </Button>
            
          </li>
        )}


