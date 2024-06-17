import React, { ReactNode } from "react"
import { StateSchema } from "../Redux/config/StateScheme"
import { Provider } from "react-redux"
import { createReduxStore } from "../Redux/config/Store"

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
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}