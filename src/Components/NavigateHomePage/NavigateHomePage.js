/* eslint-disable react/react-in-jsx-scope */
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

export const NavigateHomePage = ({ dataTestId, label }) => {
    const navigate = useNavigate();

    const clickHandle = () => {
        navigate("/home");
    };
    return (
        <Button
            variant="contained"
            data-testid={dataTestId}
            onClick={clickHandle}>
            {label}
        </Button>
    );
};

NavigateHomePage.propTypes = {
    dataTestId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
