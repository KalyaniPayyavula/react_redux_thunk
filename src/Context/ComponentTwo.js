import { ComponentThree } from "./ComponentThree";
import { useContext } from "react";
import { UserContext } from "./Context";

export const ComponentTwo = () =>{
    const {val} = useContext(UserContext)
    return(
        <>
        <h1>Data from Component one is : {val}</h1>
        <h1>Component Two</h1>
        <ComponentThree/>
        </>
    )
}