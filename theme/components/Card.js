import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sapphire = defineStyle({
    bg: "red.400",
    _dark: {
        bg: "red.50"
    },
    color: "red.400"
})

export const cardTheme = defineStyleConfig({
    variants: {
        sapphire: sapphire
    }
});
