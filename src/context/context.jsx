import React, { useState } from 'react'
import { createContext } from 'react'

const user = [
    {
        isAuthenticated: true,
        userType: "faculty",
        user:  {
            sdrn: "123",
            password: "pass@123",
            role: "teacher"
        },
    }
   ,
{
    rollno: "100",
    password: "abc",
    role: "student",
    

    isAuthenticated: false,
    userType: "faculty",
    user:  {
        rollno: "100",
        password: "pass@123",
        role: "student"
    },

}

]
export const Store = createContext();

export const StoreProvider = (props) => {
    return <Store.Provider value={user} >
        {props.children}
    </Store.Provider>;
}


