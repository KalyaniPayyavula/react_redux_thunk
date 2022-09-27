import { NavigateHomePage, Row } from "../../Components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { deposit } from '../../Store/userActionSlice';
import { useState } from "react";

export const Deposit = () =>{
    const balance = useSelector((state) => state.cash.value)
    const [ val, setVal ] = useState()
    
    const dispatch = useDispatch()

    const depositHandle = () =>{
        dispatch(deposit(parseInt(val)))
        setVal("")
    }

    return(
        <>
         <TextField label="deposit" value={val}  variant="outlined" onChange={(e) => setVal(e.target.value)}/>
            <Row>
            <Button variant="contained" onClick={depositHandle}>+</Button>
            <div>Your available balance is : {balance}</div>
            <NavigateHomePage></NavigateHomePage>
            </Row>
         </>
 
    )
}