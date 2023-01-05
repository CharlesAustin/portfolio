import { Box, Heading, Text } from "@chakra-ui/react";
import CtaLink from "./cta-button";

export default function Hero() {
    return (
        <Box as="section" py={8}>
            <Heading as="h2" size="md" mb={2}>
                Greetings! I&apos;m Austin,
            </Heading>
            <Heading as="h1" variant="hero">
                Developer & Designer
            </Heading>
            <Text maxW="60ch" mt={6}>
                I enjoy building projects for this living, breathing place we
                call the web. Passionate about the space where development &
                design intersects.
            </Text>
            <CtaLink linkAddress="./about" linkLabel="About Me" />
        </Box>
    );
}
