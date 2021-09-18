import React, { useRef } from 'react'

import IdleTimer from 'react-idle-timer'
import { useHistory } from 'react-router-dom';


const IdleUser = (props) => {
    const IdleUserTimer = useRef(null)
    const his = useHistory()
    const onIdle = () => {
        localStorage.clear()
        alert("Session TimeOut ")
        return his.push("/login")
    }
    return (
        <div>
            <IdleTimer timeout={24*60*60*1000} onIdle={onIdle} ref={IdleUserTimer} > {props.children} </IdleTimer>
        </div>
    )
}

export default IdleUser
