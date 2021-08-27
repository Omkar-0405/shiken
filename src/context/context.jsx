import React, { useState } from 'react'
import { createContext } from 'react'

export const Store = createContext(undefined);

export const StoreProvider = (props) => {
    return <Store.Provider value='auth'> {props.children} </Store.Provider>;
  }

const Auth = (props) => {
    const [state, setAuth] = useState([  {
        sdrn: "123",
        password: "123",
        role:"teacher"
    },
    {
        rollno: "100",
        password: "abc",
        role:"student"
    }

]
      
    )

    return (
        <div>GlobalState</div>
    )
}
