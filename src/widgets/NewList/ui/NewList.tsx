import { ChangeEvent, Dispatch, useCallback, useEffect, useState } from "react";
import { AddNoteSvg, CheckboxEmpty, Chekbox, Modal } from "shared"
import cls from "./NewList.module.scss"
import { StateSchema, noteData, todoPointSchema, todoSchema } from "App/Providers/Redux/config/StateScheme";
import { useDispatch, useSelector } from "react-redux";
import { MyInput } from "components/ui/input/MyInput";
import { todoDataAction } from "App/Providers/Redux/Slice/TodoDataSlice";
import { Button, ButtonTheme } from "components/ui/button/MyButton";


interface NewTododProps {
  isOpen: boolean;
  onClose: () => void;
  todoTitle?: string;
  todoPoint?: todoPointSchema[]
  newTodo: boolean,
  todoId?: string,
  setTodoPoint?:Dispatch<React.SetStateAction<todoPointSchema[]>>
  setIsOpenPopup?:Dispatch<React.SetStateAction<boolean>>
}

export const NewList = (props:NewTododProps) => {
  
  const { 
    isOpen, 
    onClose,
    todoTitle, 
    todoPoint, 
    newTodo,
    todoId,
    setIsOpenPopup,
    setTodoPoint
  } = props
  const todoData = useSelector((state:StateSchema)=> state.todoData.todoData)
  const dispatch = useDispatch();
  const [todoTextPoint, setTodoTextPoint] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [chekboxCompleted, setChekboxCompleted] = useState(false);
  const todoList = useSelector((state: StateSchema) => state.todoData.todoData);

  const handleNoteTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoTextPoint(event.target.value);
  };

  const handlerCloseModal = () => { 
    if(newTodoTitle === ''){
      dispatch(todoDataAction.deleteTodo(todoId))
    }
    setIsOpenPopup(false)
  }

  const handleNoteTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNoteTitle = event.target.value;
    setNewTodoTitle(newNoteTitle);
    setTimeout(() => dispatch(todoDataAction.updateTitle({todoId:todoId, title:newNoteTitle})), 400);
  };

  const addNewPoint = () => {
    if (todoTextPoint.trim() !== "") {
      dispatch(todoDataAction.addUpdatePoints({todoId:todoId, todoText:todoTextPoint}));
      const newPoint = { todoText: todoTextPoint, todoCompleted: false };
      const updatedTodoPoint = [...todoPoint, newPoint];
      setTodoPoint(updatedTodoPoint);
    }
    setTodoTextPoint('');
  }
  const MewTodoAddPoint = () => {
    if (todoTextPoint.trim() !== "") {
      dispatch(todoDataAction.addUpdatePoints({todoId:todoId, todoText:todoTextPoint}));
      
    }
    setTodoTextPoint('');
  };

  const handleChekboxClick = (index) => {
    setChekboxCompleted(!chekboxCompleted)
    dispatch(todoDataAction.togglePointCompletion({pointIndex:index, todoId:todoId, value:chekboxCompleted}));
}

if(newTodo){
  return (
    <Modal isOpen={isOpen} onClose={handlerCloseModal}>
      <input
        type="text"
        placeholder="Заголовок"
        value={newTodoTitle}
        onChange={handleNoteTitleChange}
        className={cls.todo_title}
      />
      <div className={cls.todo_text}>
        {todoList[todoList.length - 1].todoPoint.length !== 0
          ? todoList[todoList.length - 1].todoPoint.map((todo, index: number) => (
              <Chekbox key={index} text={todo.todoText} isCheked={todo.todoCompleted}  chekboxCompleted={chekboxCompleted} handleChekboxClick={()=>handleChekboxClick(index)} todoId={todoId} index={index} />
            ))
          : null}
        <MyInput
          className={cls.todo_text}
          placeholder="Добавить новый пункт..."
          value={todoTextPoint}
          onChange={handleNoteTextChange}
        />
        <Button onClick={MewTodoAddPoint} theme={ButtonTheme.CLEAR} className={cls.newPointBtn}>
          <AddNoteSvg /> Добавить новый пункт
        </Button>
      </div>
    </Modal>
  );
}
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <input
      type="text"
      placeholder="Заголовок"
      value={todoTitle}
      onChange={handleNoteTitleChange}
      className={cls.todo_title}
    />
    <div className={cls.todo_text}>
      {todoPoint.map((todo, index: number) => (
            <Chekbox key={index} text={todo.todoText} handleChekboxClick={()=>handleChekboxClick(index)} chekboxCompleted={chekboxCompleted}  todoId={todoId} isCheked={todo.todoCompleted} index={index} />
          ))}
      <MyInput
        className={cls.todo_text}
        placeholder="Добавить новый пункт..."
        value={todoTextPoint}
        onChange={handleNoteTextChange}
      />
      <Button onClick={addNewPoint} theme={ButtonTheme.CLEAR} className={cls.newPointBtn}>
        <AddNoteSvg /> Добавить новый пункт
      </Button>
    </div>
  </Modal>
  )
  
};
