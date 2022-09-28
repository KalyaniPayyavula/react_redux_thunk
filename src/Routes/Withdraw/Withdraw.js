import { NavigateHomePage, Row } from "../../Components"
import { useSelector, useDispatch } from "react-redux"
import { TextField } from "@mui/material"
import { useState } from "react"
import Button from '@mui/material/Button';
import { withdrawl } from '../../Store/userActionSlice'

export const Withdraw = () =>{
  const [val, setVal] = useState()
  const balance = useSelector((state) => state.cash.value)
  const dispatch = useDispatch()

  
  const withdrawHandle = () =>{
    dispatch(withdrawl(parseInt(val)))
    setVal("")
  }
    return(
        <>
            <TextField label="withdrawl" value={val} type="number" variant="outlined" onChange={(e) => setVal(e.target.value)}/>
            <Row>
            <Button variant="contained" onClick={withdrawHandle}>-</Button>
            <div>Available balance is : {balance}</div>
            <NavigateHomePage label="Back To Home"></NavigateHomePage>
            </Row> 
        </>      
    )
}