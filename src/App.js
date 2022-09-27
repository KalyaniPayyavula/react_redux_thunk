import {Home, Deposit, Withdraw, Balance} from '../src/Components/'
import { createBrowserRouter, } from 'react-router-dom'
import { Login } from './Login/Login';

const App = createBrowserRouter([
  {
   path: '/',
   element : <Login/>,
  },
  {
    path: '/home',
    element : <Home/>,
  },
  {
    path: '/deposit',
    element : <Deposit/>,
  },
  {
    path: '/withdraw',
    element : <Withdraw/>,
  },
  {
    path: '/balance',
    element : <Balance/>,
  },
])

export default App;
