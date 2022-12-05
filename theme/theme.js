import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "./styles/colors";
import fonts from "./styles/fonts"
import styles from "./styles/global";
import { headingTheme } from "./components/Heading";


const config = {
    initialColorMode: "dark",
};

const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components: {Heading: headingTheme}
});
export default theme;
