import { createContext, useEffect, useState } from "react";
import { uid } from 'uid';

export const toastContext = createContext(null)

export const ToastProvider = (props) => {
    const [toastMessage, setToastMessage] = useState([])
    useEffect(()=>{
        console.log('toastMessage',toastMessage)
    },[toastMessage])
    const appendToast = (data) => {
        let temp = toastMessage
        temp.push({...data, id: uid()})
        setToastMessage(temp)
    }

    const closeToast = (id) => {
        let temp = toastMessage.filter(item => item.id !== id)
        setToastMessage(temp)
    }

    return (
        <toastContext.Provider value={{ toastMessage, setToastMessage, appendToast, closeToast }} >
            {props.children}
        </toastContext.Provider>
    )
}