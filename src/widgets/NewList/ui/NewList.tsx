import { ChangeEvent, useState } from "react";
import { Modal } from "shared"
import cls from "./NewList.module.scss"
import { StateSchema, noteData } from "App/Providers/Redux/config/StateScheme";
import { useDispatch, useSelector } from "react-redux";
import { MyInput } from "components/ui/input/MyInput";
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice";
import { Button } from "components/ui/button/MyButton";
export const NewList =  ({isOpen,onClose}) => { 
const dispatch = useDispatch()
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const todoList = useSelector((state: StateSchema)=>state.todoData.todoData)
    console.log(todoList)

    const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(event.target.value);
      };
    const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(event.target.value);
      };
    
      console.log(noteText)
    const addNewPoint = ( )=>{
          dispatch(todoDataAction.addNewPoints(noteText))
    }  
 
    return( 
    <Modal
    isOpen={isOpen}
    onClose={onClose}>
            <input type='text' placeholder='Заголовок' value={noteTitle} onChange={handleNoteTitleChange} />
              <div className={cls.note__text}>
                <ul>{todoList.map((todo)=>
              <li>
                {todo.todoPoint}
              </li>  
                
              )
                  }

                </ul>
              <MyInput placeholder='Добавить новый пункт...' value={noteText} onChange={handleNoteTextChange}></MyInput>
              <Button onClick={addNewPoint}>Добавить новый пункт</Button>
            </div>
    </Modal>
    )
}