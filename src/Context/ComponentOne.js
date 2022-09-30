import { ComponentTwo } from "./ComponentTwo";
import { UserContext } from './Context';
import { useReducer } from 'react';
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

export const ComponentOne = () =>{
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <UserContext.Provider value={{countState: count, dispatchCount: dispatch}}>
        <h1>Component One {count}</h1>
        <ComponentTwo/>
        </UserContext.Provider>
        </>
    )
}