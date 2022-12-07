import { extendTheme } from "@chakra-ui/react";
import colors from "./styles/colors";
import fonts from "./styles/fonts";
import styles from "./styles/global";
import { headingTheme } from "./components/Heading";
import { cardTheme } from "./components/Card";

const config = {
    initialColorMode: "dark",
};

const components = {
    Heading: headingTheme,
    Card: {
        baseStyle: {
            bg: "red"
        },
        variants: {
            'branded': {
                bg: "red.400",
                _dark: {
                    bg: "red.100"
                }
            }
        }
    }
}

const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components
});
export default theme;
