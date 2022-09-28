import { useContext } from 'react'
import { UserContext } from './ComponentOne'

export const ComponentThree = () =>{
    const user = useContext(UserContext)
    return(
        <>
        <h1>Component Three</h1>
        <h1>Data from component One is {user}</h1>
        </>
    )
}