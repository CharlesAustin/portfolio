import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const linkButton = defineStyle({
    px: 6,
    py: 4,
    borderRadius: 5,
    _hover: {
        textDecoration: "none",
        bg: "sunset.300",
        boxShadow: "0 2px 4px #4A070740",
        transform: "scale(1.1)"
    },
});

const contactMeButton = defineStyle({
    py: 3,
    borderRadius: 5,
    transition: "150ms all ease-in",
    _hover: {
        textDecoration: "none",
        color: "sunset.300",
        transform: "translateY(-2px)",
    },
});

export const linkTheme = defineStyleConfig({
    baseStyle: {
        fontFamily: "'IBM Plex Sans', sans-serif",
    },
    variants: { linkButton, contactMeButton },
});
