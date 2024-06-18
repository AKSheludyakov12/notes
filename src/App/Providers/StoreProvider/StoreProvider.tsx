import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { StateSchema } from "App/Providers/Redux/config/StateScheme"
import { createReduxStore } from "App/Providers/Redux/config/Store"

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