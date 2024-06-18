import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { NoteDataReducer } from "../Slice/NoteDataSlice";
import { NoteReducer } from "../Slice/NoteSlice";

export function createReduxStore(initialState: StateSchema){
    const rootReducer: ReducersMapObject<StateSchema> = {
        noteData: NoteReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState
    })
}