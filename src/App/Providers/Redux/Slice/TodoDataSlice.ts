import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoData, todoSchema } from "../config/StateScheme";

const initialState:todoData ={
    todoData:[],
    searchTodo: [],

}


export const TodoSlice = createSlice({
name: "TodoData",
initialState,
reducers:{ 
    addTodo:  (state, action: PayloadAction<todoSchema>) => {
      const newTodo = {
            id: new Date().toISOString(),
            todoText: action.payload.todoPoint.push,
            todoTitle: action.payload.todoTitle,
            todoBackgroundColor: action.payload.todoBackgroundColor
        }
        return {
            ...state, 
            todoData:[...state.todoData, newTodo]
        }
    },
    addNewPoints: (state, action)=> {
            state.todoData.push({
                todoPoint:action.payload
            })
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
        state.searchTodo = state.todoData.filter((todo) => todo.id !== action.payload);
    },
    
        searchTodo: (state, action: PayloadAction<string>) => {
            state.searchTodo = state.todoData.filter((todo) =>
                todo.todoPoint.includes(action.payload) || todo.todoTitle.includes(action.payload)
            );
        },  
        
      
}})

export const {actions: todoDataAction } = TodoSlice
export const {reducer: todoDataReducer } = TodoSlice

