import { createContext } from "react"
import { useReducer } from 'react';


export const UserContext = createContext()

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case  "increment":
            return state + 1
        case "decrement":
            return state - 1 
            case "reset":
            return initialState
        default:
            return state    
    }
}

export const UserContextProvider = ({children}) => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const value = {countState: count, dispatchCount: dispatch}
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
