import Button from "@mui/material/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "@mui/system";

export const HomeStyle = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "1%",
});

export const Home = () => {
    const navigate = useNavigate();
    const LogoutHandle = () => {
        navigate("/");
    };

    const NavStyle = {
        textDecoration: "none",
        border: "2px solid black",
        color: "black",
        padding: "1%",
    };
    return (
        <HomeStyle>
            <NavLink to="/balance" style={NavStyle}>
                BALANCE
            </NavLink>
            <NavLink to="/deposit" style={NavStyle}>
                DEPOSIT
            </NavLink>
            <NavLink to="/withdraw" style={NavStyle}>
                WITHDRAW
            </NavLink>
            <Button variant="outlined" onClick={LogoutHandle}>
                Logout
            </Button>
        </HomeStyle>
    );
};
