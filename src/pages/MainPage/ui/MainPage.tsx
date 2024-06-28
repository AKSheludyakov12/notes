import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice";
import { StateSchema, noteSchema } from "App/Providers/Redux/config/StateScheme";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./MainPage.module.scss"
import { Header } from "widgets/header";
import { AddNoteSvg } from "shared";
import { Button, ButtonTheme } from "components/ui/button/MyButton";
import { Popup } from "widgets/Popup";
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice";
import { ContentList } from "./TodosAndNotesList/ContentList";
import { NoteListEmpty } from "pages/NoteListEmpty/NoteListEmpty";




  export const MainPage = ( ) => {
      const dispatch = useDispatch()
      const [searchValue, setSerchValue] = useState(" ")
      const [notes, setNotes] = useState([])
      const [todos, setTodos] = useState([])
      const [sort, setSort] = useState('ALL')
      const searchNote = useSelector((state:StateSchema)=>state.noteData.searchNote)
      const searchTodo = useSelector((state:StateSchema)=> state.todoData.searchTodo)
      const noteData = useSelector((state:StateSchema)=>state.noteData.noteData)
      const todoData = useSelector((state: StateSchema)=>state.todoData.todoData)
      const [isOpenPopup, setIsOpenPopup] = useState(false);
    console.log(noteData)

      useEffect((
        )=>{
          setNotes(searchValue === " " ? noteData : searchNote)
          setTodos(searchValue === " " ? todoData : searchTodo)
        },[searchValue, searchNote, searchTodo, noteData, todoData, todoDataAction.addTodo, NoteDataAction.addNote, todoDataAction.addUpdatePoints,])

      const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch(NoteDataAction.searchNote((e.target.value)))
        dispatch(todoDataAction.searchTodo((e.target.value)))
        setSerchValue(e.target.value)
      }
      
      

      return ( 
        
          <div className={cls.MainPage}>
              <Header onChangeInput={onChangeInput} sort={sort}
               setSort={setSort}/>
              {noteData.length === 0 && todoData.length === 0 ? <NoteListEmpty/> : 
              <ContentList
              sort={sort}
              notes={notes}
              todos={todos}/>
            }
              
              {isOpenPopup && <Popup isOpen={isOpenPopup} setIsOpenPopup={setIsOpenPopup}
               />}
              
              <Button theme={ButtonTheme.CIRCLE} 
              className={cls.pozition_button}
              onClick={()=>setIsOpenPopup(!isOpenPopup)}>
                <AddNoteSvg/>
              </Button>
        </div>
      )
  }