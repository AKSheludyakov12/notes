import { ClassNames, Modal } from "shared";
import cls from "./Popup.module.scss"
import { Ref, useCallback, useDebugValue, useEffect, useRef, useState } from "react";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { NewNote } from "../NewNote";
import { NewList } from "widgets/NewList/ui/NewList";
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice";
import { StateSchema } from "App/Providers/Redux/config/StateScheme";

interface PopupProps { 
    isOpen?: boolean;
    setIsOpenPopup?: (boolean)=>void
    className?: string;
    onAddNewNote?: (newNote) => void
    
}

export const Popup = (props:PopupProps) => {
    const dispatch = useDispatch()
    const {isOpen,setIsOpenPopup,className,onAddNewNote   } = props
    const popupRef = useRef<HTMLDivElement>(null);
    const lastNote = useSelector((state: StateSchema) => state.noteData.noteData[state.noteData.noteData.length - 1]);
    const lastNoteId = lastNote ? lastNote.id : " ";
    const lastTodo = useSelector((state: StateSchema) => state.todoData.todoData[state.todoData.todoData.length -1])
    const lastTodoId = lastTodo ? lastTodo.id : " "
    const [newNoteModal, setNewNoteModal] = useState(false)
    const [newListModal, setNewListModal] = useState(false)

    const showNewNoteModal = () => {
        setNewNoteModal(true)
        dispatch(NoteDataAction.addNote({ id:new Date().toISOString(), noteTitle:"",  noteBackgroundColor: "", noteText: "" }))
        
    }
    const showNewListModal = () => {
        setNewListModal(true)
        dispatch(todoDataAction.addTodo({ id:new Date().toISOString(),  todoPoint: { todoText: [] },
            todoTitle: " ",
            todoBackgroundColor: ""}))
        
    }


    const onCloseModal = useCallback(()=>{
        setNewNoteModal(false)
        setIsOpenPopup(false)

      },[])

if(isOpen){

    return (
        <>
         {newNoteModal && <NewNote
            noteId={lastNoteId}
            newNote={true}
            isOpen={newNoteModal}
            onClose={onCloseModal}
            setNewNoteModal={setNewNoteModal}
            />}

        {newListModal && <NewList
            todoId={lastTodoId}
            isOpen={newListModal}
            onClose={onCloseModal}
            setIsOpenPopup={setIsOpenPopup}
            newTodo={true}/>}
        <div className={cls.overlay} onClick={()=>setIsOpenPopup(false)}>
            <div className={ClassNames(cls.popup)} ref={popupRef}>
                
                <div className={cls.items} onClick={e=> e.stopPropagation()}>
                    <span className={cls.item}>
                        <Button theme={ButtonTheme.POPUP}
                        onClick={showNewNoteModal}>
                        Добавить заметку
                        </Button>
                    </span>
                   
                    <span className={cls.item}>
                        <Button theme={ButtonTheme.POPUP}
                        onClick={showNewListModal}>
                        Добавить список
                        </Button>
                    </span>
                </div>
            </div>
        </div>
                            </>
    );

}

};