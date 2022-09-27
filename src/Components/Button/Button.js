import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const BackToHomePage = () =>{
    const navigate = useNavigate()

    const clickHandle = () =>{
        navigate('/home')
    }
    return(
     <Button variant="contained" onClick={clickHandle}>Back to Home</Button>
    )
}