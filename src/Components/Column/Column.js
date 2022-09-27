import { styled } from "@mui/system"
export const Column = ({children}) =>{
    const ColumnStyle = styled('div')({
        display : "flex",
        flexDirection : "column",
        marginLeft : "35%",
        width  : "20%"
    })
    return(
        <ColumnStyle>{children}</ColumnStyle>
    )
}