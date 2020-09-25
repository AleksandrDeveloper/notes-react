import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../type";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = ({ children }) => {
    const [state,dispatch] = useReducer(AlertReducer,{visible:false})

    function show(text,type='warning'){
        console.log(text,type);
        dispatch({
            type:SHOW_ALERT,
            payload:{
                text, 
                type,
            }
        })
    }
    function hide(){
        dispatch({
            type:HIDE_ALERT,
        })
    }
    return <AlertContext.Provider value={{
        alert:state,
        show,
        hide
    }}>{children}</AlertContext.Provider>
}


export default AlertState