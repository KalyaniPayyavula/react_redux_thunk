import { BackToHomePage, Row } from "../../Components"
import { useSelector, useDispatch } from "react-redux"
import { TextField } from "@mui/material"
import { useState } from "react"
import Button from '@mui/material/Button';
import { withdrawl } from '../userActionSlice'

export const Withdraw = () =>{
  const [val, setVal] = useState()
  const balance = useSelector((state) => state.cash.value)
  const dispatch = useDispatch()

  
  const withdrawHandle = () =>{
    dispatch(withdrawl(parseInt(val)))
    setVal("")
  }
    return(
        <Row>
          <TextField label="withdrawl" value={val} type="number" variant="outlined" onChange={(e) => setVal(e.target.value)}/>
          <div>Available balance is : {balance}</div>
          <Button variant="contained" onClick={withdrawHandle}>-</Button>
          <BackToHomePage></BackToHomePage>
        </Row>       
    )
}