import { ReducersMapObject, configureStore, combineReducers } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { NoteDataReducer } from "../Slice/NoteDataSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

export function createReduxStore(initialState: StateSchema) {
    const rootReducer = combineReducers ({
        noteData: NoteDataReducer,
        
    });

    const persistedReducer = persistReducer(persistConfig, rootReducer)


    return configureStore<StateSchema>({
        reducer: persistedReducer,
        preloadedState: initialState
    });
}

