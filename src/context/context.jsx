import React, { useState } from 'react'
import { createContext } from 'react'

const user = [{
    sdrn: "123",
    password: "123",
    role: "teacher"
},
{
    rollno: "100",
    password: "abc",
    role: "student",
    
}

]
export const Store = createContext();

export const StoreProvider = (props) => {
    return <Store.Provider value={user} >
        {props.children}
    </Store.Provider>;
}


