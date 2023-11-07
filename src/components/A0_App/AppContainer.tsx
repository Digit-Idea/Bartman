import {App} from "./App";
import * as React from "react";
import {HashRouter} from "react-router-dom";
import {createContext} from "react";
import {store, Store} from "../../store/store";

export const StoreContext = createContext<Store>({} as Store)

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </StoreContext.Provider>
    )
}
