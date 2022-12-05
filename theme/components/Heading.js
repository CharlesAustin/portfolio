import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const h1 = defineStyle({
    color: "mint.900",
    fontWeight: "regular",
    _dark: {
        color: "mint.200",
    },
});
export const headingTheme = defineStyleConfig({
    variants: {
        h1: h1,
    },
});
