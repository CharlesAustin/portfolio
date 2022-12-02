import { Box, Container, Heading, Text } from "@chakra-ui/react";
import FrameworkGrid from "../components/skills-frameworks-grid";
import LanguageGrid from "../components/skills-language-grid";

export default function Skills() {
    return (
        <Box as="main">
            <Container>
                <Box as="section">
                    <Heading>Skills</Heading>
                    <Text>Here are the technologies in my tool box.</Text>
                </Box>
                <Box as="section">
                    <Heading>Languages</Heading>
                    <LanguageGrid />
                </Box>
                <Box as="section">
                    <Heading>Frameworks &amp; Libraries</Heading>
                    <FrameworkGrid />
                </Box>
                <Box as="section">
                    <Heading>Design Tools</Heading>
                </Box>
            </Container>
        </Box>
    );
}
