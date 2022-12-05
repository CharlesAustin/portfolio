import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import DesignPlatformGrid from "../components/grid/skills-design-platform-grid";
import FrameworkGrid from "../components/grid/skills-frameworks-grid";
import LanguageGrid from "../components/grid/skills-language-grid";

export default function Skills() {
    return (
        <Box as="main">
            <Container maxW="100%">
                <Box as="section">
                    <Box as="section" maxW="xl" margin="0 auto" my={12}>
                        <Heading fontWeight="bold" variant="h1">Skills</Heading>
                        <Text>
                            The web is an expansive and diverse ecosystem with
                            so much to choose from. I love to learn and am
                            always adding, updating, and improving my design
                            &amp; development toolbox. Here are some of the
                            technologies I&apos;m building with!
                        </Text>
                    </Box>
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={8}
                        maxW={{ base: "100%", sm: "70%", md: "100%" }}
                        margin="0 auto"
                    >
                        <Box w={{ base: "100%", md: "33.33%" }}>
                            <LanguageGrid />
                        </Box>
                        <Box w={{ base: "100%", md: "33.33%" }}>
                            <FrameworkGrid />
                        </Box>
                        <Box w={{ base: "100%", md: "33.33%" }}>
                            <DesignPlatformGrid />
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
