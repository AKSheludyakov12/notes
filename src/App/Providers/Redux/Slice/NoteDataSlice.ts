import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { noteData, noteSchema } from "../config/StateScheme";

const initialState:noteData ={
    noteData:[],
    searchNote: []

}

export const NoteSlice = createSlice({
name: "NoteData",
initialState,
reducers:{ 
    addNote:  (state, action: PayloadAction<noteSchema>) => {
        state.noteData.push({
            id: new Date().toISOString(),
            noteText: action.payload.noteText,
            noteTitle: action.payload.noteTitle,
            noteBackgroundColor: action.payload.noteBackgroundColor
        })  
    },
    deleteNote: (state, action: PayloadAction<string>) => {
        state.noteData = state.noteData.filter((note) => note.id !== action.payload);
    },
    
    searchNote: (state, action: PayloadAction<string>) => {
        state.searchNote = state.noteData.filter((note) =>
            note.noteText.includes(action.payload) || note.noteTitle.includes(action.payload)
        );
    }
}
})

export const {actions: NoteDataAction } = NoteSlice
export const {reducer: NoteDataReducer } = NoteSlice

