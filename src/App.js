import { Home, Deposit, Withdraw, Balance, Login } from "./Routes/";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/deposit",
        element: <Deposit />,
    },
    {
        path: "/withdraw",
        element: <Withdraw />,
    },
    {
        path: "/balance",
        element: <Balance />,
    },
]);

export default App;
