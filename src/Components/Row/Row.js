import { styled } from "@mui/system"
export const Row = ({children}) => {
    const RowStyle = styled('div')({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    })
    return(
        <RowStyle>{children}</RowStyle>
    )
}