import PropTypes  from "prop-types"
import { styled } from "@mui/system"

export const Column = ({children, dataTestId}) =>{
    const ColumnStyle = styled('div')({
        display : "flex",
        flexDirection : "column",
        marginLeft : "35%",
        width  : "20%"
    })
    return(
        <ColumnStyle data-testid = {dataTestId}>{children}</ColumnStyle>
    )
}

Column.propTypes = {
    dataTestId: PropTypes.string.isRequired,
    children : PropTypes.array.isRequired  
}