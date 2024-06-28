import { Button, ButtonTheme } from "components/ui/button/MyButton"
import cls from "./ContentList.module.scss"
import { DeleteSVG, NotesWrapper, TodosWrapper } from "shared"
import { useDispatch } from "react-redux"
import { NoteDataAction } from "App/Providers/Redux/Slice/NoteDataSlice"
import { noteSchema, todoSchema } from "App/Providers/Redux/config/StateScheme"
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { NewNote } from "widgets/Popup/NewNote"
import { NewList } from "widgets/NewList/ui/NewList"

interface ContentListProps {
    notes:noteSchema [],
    todos: todoSchema [],
    sort: string
}


export const ContentList = ({notes, todos, sort}:ContentListProps) => {
  console.log(sort)
  const [showNote, setShowNote] = useState(false)
  const [showTodo, setShowTodo] = useState(false)
  const [todoPoint, setTodoPoint] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [noteText, setNoteText] = useState("")
  const [noteTitle, setNoteTitle] = useState("")
  const [noteId, setNoteId] = useState("")
  const [todoId, setTodoId] = useState("")
  
  const elementRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current && notes ) {
      const height = elementRef.current.getBoundingClientRect().height;
      setElementHeight(height);
    }
  }, [notes, elementRef.current]);
  console.log(elementHeight)


  const handleNote = (text, title, id ) => {
    setShowNote(true)
    setNoteText(text)
    setNoteTitle(title)
    setNoteId(id)

  }
  const handleTodo = (title, todoPoint, id) => {
    setShowTodo(true)
    setTodoTitle(title)
    setTodoPoint(todoPoint)
    setTodoId(id)

  }

  const onClose = () =>{
    setShowNote(false)
    setShowTodo(false)
  }

  const handleDeleteNote =(event: ChangeEvent<HTMLButtonElement>, id) =>{
  event.stopPropagation()
  dispatch(NoteDataAction.deleteNote(id))
  }
  const handleDeleteTodo =(event: ChangeEvent<HTMLButtonElement>, id) =>{
    event.stopPropagation()
    dispatch(todoDataAction.deleteTodo(id))
    }

    const dispatch = useDispatch()
   


    return (
      <div className={cls.ContentList}>
        {showNote && <NewNote newNote={false} isOpen={showNote} onClose={onClose} noteId={noteId} noteText={noteText} setNoteText={setNoteText} setNoteTitle={setNoteTitle} noteTitle={noteTitle} />}
        {showTodo && <NewList newTodo={false} isOpen={showTodo} onClose={onClose} todoId={todoId} todoPoint={todoPoint} setTodoPoint={setTodoPoint} todoTitle={todoTitle} />}
    
        {notes && sort !== "Todos" && notes.map((note, index) => (
          <NotesWrapper
            key={note.id}
            backgroundColor={note.noteBackgroundColor}
            title={note.noteTitle}
            text={note.noteText}
            onClick={() => handleNote(note.noteText, note.noteTitle, note.id)}
          >
            <div className={cls.delete_button}>
              <Button
                className={cls.delete_button}
                theme={ButtonTheme.CLEAR}
                onClick={(e) => handleDeleteNote(e, note.id)}
              >
                <DeleteSVG />
              </Button>
            </div>
          </NotesWrapper>
        ))}
    
        {todos && sort !== "Notes" && todos.map((todo) => (
          <TodosWrapper
            key={todo.id}
            className={cls.note}
            backgroundColor={todo.todoBackgroundColor}
            point={todo.todoPoint}
            title={todo.todoTitle}
            onClick={() => handleTodo(todo.todoTitle, todo.todoPoint, todo.id)}
          >
            <div className={cls.delete_button}>
              <Button theme={ButtonTheme.CLEAR} onClick={(e) => handleDeleteTodo(e, todo.id)}>
                <DeleteSVG />
              </Button>
            </div>
          </TodosWrapper>
        ))}
      </div>
    );

}