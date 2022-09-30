import { ComponentTwo } from "./ComponentTwo";
import { UserContext } from './Context';
import { useState } from 'react';

export const ComponentOne = () =>{
    const [val, setVal] = useState("I'm being shared")
    return(
        <>
        <UserContext.Provider value={{val, setVal}}>
        <h1>Component One</h1>
        <ComponentTwo/>
        </UserContext.Provider>
        </>
    )
}