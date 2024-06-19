import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { StateSchema } from "App/Providers/Redux/config/StateScheme"
import { createReduxStore } from "App/Providers/Redux/config/Store"
import persistStore from "redux-persist/es/persistStore"
import { PersistGate } from "redux-persist/integration/react"

interface StoreProviderProps {
    children?:ReactNode, 
    initialState?: DeepPartial<StateSchema> 
}

export const StoreProvider = (props:StoreProviderProps) =>{
    const {
        children, 
        initialState
    } = props
 const store = createReduxStore(initialState as StateSchema);
 const persistor = persistStore(store)

    return (
        <PersistGate persistor={persistor}>

        <Provider store={store}>
            {children}
        </Provider>
        </PersistGate>
    )
}