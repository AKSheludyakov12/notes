import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { noteSchema } from "../config/StateScheme";

const initialState:noteSchema ={
    id: 0,
    noteTitle: "",
    noteText:"",
    noteBackgroundColor: "#000"

}

export const NoteSlice = createSlice({
name: "NoteData",
initialState,
reducers:{ 
    setNoteId:  (state, action: PayloadAction<number>) => {
        state.id = action.payload
    },
    setNoteTitle: (state, action: PayloadAction<string>) => {
        state.noteTitle = action.payload
    },
    setNoteText: (state, action: PayloadAction<string>) => {
        state.noteText = action.payload
    },
    setNoteColor: (state, action: PayloadAction<string>) => {
        state.noteBackgroundColor = action.payload
    }
}
})

export const {actions: NoteDataAction } = NoteSlice
export const {reducer: NoteDataReducer } = NoteSlice
