import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

export default function CtaLink({ linkLabel, linkAddress }) {
    const bgToggle = useColorModeValue("sapphire.500", "sapphire.50");
    const colorToggle = useColorModeValue("white", "sapphire.900");

    return (
        <Box
            my={10}
            display="inline-block"
            transition="150ms all cubic-bezier(0.175, 0.885, 0.3, 1.9)"
            _hover={{ transform: "scale(1.1)" }}
        >
            <Link
                backgroundColor={bgToggle}
                color={colorToggle}
                as={NextLink}
                href={linkAddress}
                variant="linkButton"
            >
                {linkLabel}
            </Link>
        </Box>
    );
}
