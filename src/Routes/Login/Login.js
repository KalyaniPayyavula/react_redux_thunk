import TextField from '@mui/material/TextField';
import { Column } from '../../Components';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { ComponentOne } from '../../Context/ComponentOne';
import { UserContextProvider } from '../../Context/Context';

export const Login = () =>{
    const navigate = useNavigate()
    const ButtonStyle = styled(Button)({
          marginTop: '7%'
    })

    const loginHandle = () =>{
        navigate('/home')
    }

    return(
        <>
        <UserContextProvider>
        <Column dataTestId='ColumnId'>
         <TextField id="username-id" label="Username" variant="standard" />
         <TextField id="password-id" label="Password" variant="standard" />
         <ButtonStyle variant="contained" onClick={loginHandle}>Login</ButtonStyle>
        </Column>
        <ComponentOne/>
       </UserContextProvider>
       </>
    )
}