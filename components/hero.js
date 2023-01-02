import NextLink from "next/link";
import {
    Box,
    Heading,
    Text,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Hero() {
    const bgToggle = useColorModeValue("sapphire.500", "sapphire.50");
    const colorToggle = useColorModeValue("white", "sapphire.900");

    return (
        <Box as="section" py={8}>
            <Heading
                as="h2"
                size="md"
                mb={2}
                fontFamily="Merriweather, sans-serif"
            >
                Greetings! I&apos;m Austin
            </Heading>
            <Heading as="h1" variant="hero">
                Developer & Designer
            </Heading>
            <Text maxW="60ch" mt={6}>
                I enjoy building projects for this living, breathing place we
                call the web. Passionate about the space where development &
                design intersects.
            </Text>
            <Box
                my={10}
                display="inline-block"
                transition="150ms all cubic-bezier(0.175, 0.885, 0.3, 1.9)"
                _hover={{ transform: "scale(1.1)"}}
                
            >
                <Link
                    backgroundColor={bgToggle}
                    color={colorToggle}
                    as={NextLink}
                    href="./work"
                    variant="linkButton"
                >
                    My Work
                </Link>
            </Box>
        </Box>
    );
}
