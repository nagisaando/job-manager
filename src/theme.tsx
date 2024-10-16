import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#129490",
        },
        error: {
            main: "#EE6055",
        }  
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
})

const responsiveTheme = responsiveFontSizes(theme)

export default responsiveTheme