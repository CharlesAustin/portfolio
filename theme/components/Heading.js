import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const hero = defineStyle({
    fontSize: () => ({ base: "50px", lg: "90px" }),
    backgroundImage: "linear-gradient(90deg, var(--chakra-colors-sapphire-500) 0%, var(--chakra-colors-sunset-700) 100%);",
    backgroundClip: "text",
    backgroundSize: "100%",
    letterSpacing: "-3px",
    display: "inline-block",
    _dark: {
        backgroundImage: "linear-gradient(90deg, var(--chakra-colors-sapphire-50) 0%, var(--chakra-colors-sunset-200) 100%);" 
    }
});

const h1 = defineStyle({
    color: "metal.700",
    fontWeight: "regular",
    fontSize: 56,
    _dark: {
        color: "sapphire.50",
    },
});
export const headingTheme = defineStyleConfig({
    variants: {
        hero: hero,
        h1: h1,
    },
});
