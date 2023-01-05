import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const linkButton = defineStyle({
    px: 6,
    py: 4,
    borderRadius: 5,
    transition: "150ms all ease-in",
    _hover: {
        textDecoration: "none",
        bg: "sunset.300",
        boxShadow: "0 2px 4px #4A070740",
    },
});

const contactMeButton = defineStyle({
    px: 4,
    py: 3,
    borderRadius: 5,
    transition: "150ms all ease-in",
    _hover: {
        textDecoration: "underline",
        transform: "translateY(-2px)",
    },
});

export const linkTheme = defineStyleConfig({
    baseStyle: {
        fontFamily: "'IBM Plex Sans', sans-serif",
    },
    variants: { linkButton, contactMeButton },
});
