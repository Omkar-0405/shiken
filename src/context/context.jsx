import React, { useState } from 'react'
import { createContext } from 'react'

/**
* @author
* @function GlobalState
**/
const UserContext = createContext(undefined);

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


export default GlobalState