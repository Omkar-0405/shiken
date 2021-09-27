import React from 'react'
import { createContext } from 'react'

// const user =  {
//         isAuthenticated: true,
//         userType: "faculty",
//         user:  {
//             sdrn: "123",
//             password: "pass@123",
//             role: "teacher"
//         },
//     }

export const Store = createContext();
// [user, setUser] = React.useState({
//     isAuthenticated: false,
//     userType: "faculty",
//     user: {
//         // token
//         // role: "teacher"
//     }
// }
// )
export const StoreProvider = (props) => {
    // const [user,setUser] = React.useState("")
    return <Store.Provider 
    // value={[user,setUser]}
     >
        {props.children}
    </Store.Provider>;
}


