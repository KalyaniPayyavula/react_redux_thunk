import { useContext } from 'react'
import { UserContext } from './Context'

export const ComponentThree = () =>{
    const {val, setVal} = useContext(UserContext)
    return(
        <>
        <h1>Component Three</h1>
        <h1>Data from component One is {val}</h1>
        <button onClick={() => setVal("new Value")}>Click</button>
        </>
    )
}