import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { noteData, noteSchema, todoSchema } from "../config/StateScheme";

const initialState:noteData ={
    noteData:[],
    searchNote: [],

}

export const NoteSlice = createSlice({
name: "NoteData",
initialState,
reducers:{ 
    addNote:  (state, action: PayloadAction<noteSchema>) => {
      const newNote = {
            id: new Date().toISOString(),
            noteText: action.payload.noteText,
            noteTitle: action.payload.noteTitle,
            noteBackgroundColor: action.payload.noteBackgroundColor
        }
        return {
            ...state, 
            noteData:[...state.noteData, newNote]
        }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
        state.noteData = state.noteData.filter((note) => note.id !== action.payload);
    },
    
        searchNote: (state, action: PayloadAction<string>) => {
            state.searchNote = state.noteData.filter((note) =>
                note.noteText.includes(action.payload) || note.noteTitle.includes(action.payload)
            );
        },  
        
      
}})

export const {actions: NoteDataAction } = NoteSlice
export const {reducer: NoteDataReducer } = NoteSlice

