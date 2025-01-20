import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const userContext = createContext(null)

export const UserProvider = (props) => {
    const [authToken, setAuthToken] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const tempToken = Cookies.get('authtoken')
        setAuthToken(tempToken)
    }, [])


    useEffect(() => {
        if (authToken) {
            const user = jwtDecode(authToken)
            setUserData(user)
        } else {
            setUserData(null)
        }
    }, [authToken])

    useEffect(() => {
        console.log('userData', userData)
    }, [userData])

    return (
        <userContext.Provider value={{ authToken, setAuthToken, userData, setUserData }} >
            {props.children}
        </userContext.Provider>
    )
}