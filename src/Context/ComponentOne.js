import { createContext } from "react"
import { ComponentTwo } from "./ComponentTwo"

export const UserContext = createContext()
export const ComponentOne = () =>{
    return(
        <>
        <UserContext.Provider value="This is Kalyani">
        <h1>Component One</h1>
        <ComponentTwo/>
        </UserContext.Provider>
        </>
    )
}