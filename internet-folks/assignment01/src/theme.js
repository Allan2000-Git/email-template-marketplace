import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        primary: "#0E2368",
        secondary: "#E23744",
        grey1: "#444957",
        grey2:"#424961",
        grey3:"#AFAFAF",
        grey4:"#646874",
        footer:"#828B9C",
        bg:"linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%))",
    },
    breakpoints: {
        sm: "375px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
})