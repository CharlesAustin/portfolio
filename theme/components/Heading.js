import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const hero = defineStyle({
    fontSize: 96
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
