import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todoData, todoSchema } from "../config/StateScheme";
import randomColor from "randomcolor"

interface InitialState {
    todoData:  todoSchema[]
    searchTodo: todoSchema[];
}

const initialState:InitialState ={
    todoData:[],
    searchTodo: [],

}



export const TodoSlice = createSlice({
name: "TodoData",
initialState,
reducers:{ 
    addTodo:  (state, action:PayloadAction<todoSchema>) => {
        const newTodo = {
            id: action.payload.id,
            todoPoint:[],
            todoTitle: '',
            todoBackgroundColor: randomColor({
                luminosity: 'light',
             })
        };
    
        return {
            ...state,
            todoData: [...state.todoData, newTodo]
        };
    },
    addUpdatePoints: (state, action: PayloadAction<{todoId: string, todoText:string}>) => {
        state.todoData.forEach(todo => {
            if (todo.id === action.payload.todoId) {
                todo.todoPoint.push({ todoText: action.payload.todoText, todoCompleted: false });
            }
        });
    },
    togglePointCompletion: (state, action: PayloadAction<{ pointIndex: number, todoId: string, value:boolean }>) => {
        const { todoId, pointIndex, value } = action.payload;

        state.todoData.forEach(todo => {
            if (todo.id === todoId) {
                todo.todoPoint = todo.todoPoint.map((point, index) => {
                    if (index === pointIndex) {
                        return {
                            ...point,
                            todoCompleted: value
                        };
                    } else {
                        return point;
                    }
                });
            }
        });
    },
    
    deletePoint: (state, action: PayloadAction<string>) => {
        state.todoData.forEach(todo => {
            if (todo.id === state.todoData[state.todoData.length - 1].id) {
                todo.todoPoint = todo.todoPoint.filter(point => point.todoText !== action.payload);
            }
        });
    },

    updateTitle: (state, action: PayloadAction<{todoId:string, title:string}>) => {
        state.todoData.forEach(todo => {
            if (todo.id === action.payload.todoId) {
                todo.todoTitle = action.payload.title
            }
        });
    },


    deleteTodo: (state, action: PayloadAction<string>) => {
        state.todoData  = state.todoData.filter((todo) => todo.id !== action.payload);
        state.searchTodo  = state.todoData.filter((todo) => todo.id !== action.payload);

    },
    
    searchTodo: (state, action: PayloadAction<string>) => {
        state.searchTodo = state.todoData.filter(todo => todo.todoTitle.includes(action.payload) ||
        todo.todoPoint.some(point => point.todoText.includes(action.payload)))},
        
      
}})

export const {actions: todoDataAction } = TodoSlice
export const {reducer: todoDataReducer } = TodoSlice

