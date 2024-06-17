import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateSchema, noteData, noteSchema } from "../config/StateScheme";
import { stat } from "fs";

const initialState:noteData ={
    noteData: []

}

export const NoteSlice = createSlice({
name: "NoteData",
initialState,
reducers:{ 
    setNotes:  (state, action: PayloadAction<noteData>) => {
        state.noteData = action.payload.noteData
    },
    deleteNote: (state, action: PayloadAction<number>) =>{
        state.noteData = state.noteData.filter((note)=>
            note.id !== action.payload
        )
    }, 
    searchNote: (state, action: PayloadAction<string>) => {
        state.noteData = state.noteData.filter((note)=>{
            note.noteText.includes(action.payload) ||   
            note.noteTitle.includes(action.payload)
            
        })
    }
}
})

export const {actions: NoteDataAction } = NoteSlice
export const {reducer: NoteDataReducer } = NoteSlice
