/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { styled } from "@mui/system";

export const Row = ({ children, dataTestId }) => {
    const RowStyle = styled("div")({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    });
    return <RowStyle data-testid={dataTestId}>{children}</RowStyle>;
};

Row.propTypes = {
    children: PropTypes.element.isRequired,
    dataTestId: PropTypes.string.isRequired,
};
