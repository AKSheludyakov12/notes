import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { NoteDataReducer } from "../Slice/NoteDataSlice";

export function createReduxStore(initialState: StateSchema){
    const rootReducer: ReducersMapObject<StateSchema> = {
        noteData: NoteDataReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState
    })
}