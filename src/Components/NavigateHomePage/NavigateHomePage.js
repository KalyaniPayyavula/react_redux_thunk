import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavigateHomePage = () =>{
    const navigate = useNavigate()

    const clickHandle = () =>{
        navigate('/home')
    }
    return(
     <Button variant="contained" onClick={clickHandle}>Back to Home</Button>
    )
}