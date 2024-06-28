import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { noteData, noteSchema, todoSchema } from "../config/StateScheme";
import randomColor from "randomcolor"

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
            id: action.payload.id,
            noteText: ' ',
            noteTitle: ' ',
            noteBackgroundColor: randomColor({
                luminosity: 'light',
             })
        }
        return {
            ...state, 
            noteData:[...state.noteData, newNote]
        }
    },

    updateNoteTitle: (state, action: PayloadAction<{id:string, text:string}>)=>{
        state.noteData.map(note => {
            if (note.id === action.payload.id) {
                note.noteTitle = action.payload.text;
            }
        });
    },
    
    updateNoteText: (state, action: PayloadAction<{id: string, text:string} >)=>{
        state.noteData.map((note) => {
            if (note.id === action.payload.id) {
                note.noteText = action.payload.text
            }
        });
    },
    deleteNote: (state, action: PayloadAction<string>) => {
        state.noteData = state.noteData.filter((note) => note.id !== action.payload);
        state.searchNote = state.noteData.filter((note) => note.id !== action.payload);

    },
    
     searchNote: (state, action: PayloadAction<string>) => {
            state.searchNote = state.noteData.filter((note) =>
                note.noteText.includes(action.payload) || note.noteTitle.includes(action.payload)
            );
        },  
        
      
}})

export const {actions: NoteDataAction } = NoteSlice
export const {reducer: NoteDataReducer } = NoteSlice

