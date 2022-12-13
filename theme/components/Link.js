import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const linkButton = defineStyle({
    px: 6,
    py: 4,
    borderRadius: 5,
    _hover: {
        textDecoration: "none"
    }
});


export const linkTheme = defineStyleConfig({
    variants: {linkButton},

})