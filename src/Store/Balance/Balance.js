import { BackToHomePage, Row } from "../../Components"
import { useSelector } from 'react-redux'

export const Balance = () =>{
  const balance = useSelector((state) => state.cash.value)
    return(
        <Row>
          <h2>Your available balance is : {balance}</h2>
          <BackToHomePage></BackToHomePage>
        </Row>
        
    )
}