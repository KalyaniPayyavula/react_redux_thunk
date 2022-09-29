import { ComponentTwo } from "./ComponentTwo"
import { UserContext } from './Context'

export const ComponentOne = () =>{
    const dataTobeShared = "I'm being shared"
    return(
        <>
        <UserContext.Provider value={dataTobeShared}>
        <h1>Component One</h1>
        <ComponentTwo/>
        </UserContext.Provider>
        </>
    )
}