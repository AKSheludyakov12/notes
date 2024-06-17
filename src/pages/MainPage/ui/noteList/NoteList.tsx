import React from "react"
import { Button, ButtonTheme } from "../../../../components/ui/button/MyButton"
import cls from "./NoteList.module.scss" 
import { Link } from "react-router-dom"
import { DeleteSVG } from "../../../../shared"
import { noteSchema } from "../../../../App/Providers/Redux/config/StateScheme"

interface NoteListProps {
    id: number,
    backgroundColor: string,
    note: noteSchema,
    onClick: (id:number) => void

}

export const NoteList = (props:NoteListProps) => {
    const {
        id,
        backgroundColor,
        note,
        onClick
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
            onClick={onClick}
            >
              <DeleteSVG/>
            </Button>
            
          </li>
        )}


