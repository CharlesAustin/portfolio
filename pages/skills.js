import {
    Box,
    Container,
    Heading,
    Text,
} from "@chakra-ui/react";
import CurrentSkillsGrid from "../components/icons/current-skills-icon-grid";

export default function Skills() {
    return (
        <Box as="main">
            <Container>
                <Box as="section">
                    <Heading>Skills</Heading>
                    <Text>
                        Past, present &amp; future. Here are the technologies in
                        my tool box.
                    </Text>
                </Box>
                <Box as="section">
                    <Heading>What I&apos;m working with</Heading>
                    <CurrentSkillsGrid test="Cool"/>
                </Box>
            </Container>
        </Box>
    );
}
