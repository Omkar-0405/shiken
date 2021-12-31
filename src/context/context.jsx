import React from 'react'
import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch }
    // to use this --->   destructure state and dispatch from useContext(Context)
    return <Context.Provider
        value={value}
    >
        {props.children}
    </Context.Provider>;
}


