import { extendTheme } from "@chakra-ui/react";
import colors from "./styles/colors";
import fonts from "./styles/fonts";
import styles from "./styles/global";
import { headingTheme } from "./components/Heading";
import { textTheme } from "./components/Text";
import { linkTheme } from "./components/Link";

const config = {
    initialColorMode: "dark",
};

const components = {
    Heading: headingTheme,
    Text: textTheme,
    Link: linkTheme,
};

const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components,
});
export default theme;
