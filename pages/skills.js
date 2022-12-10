import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import DesignPlatformGrid from "../components/grid/skills-design-platform-grid";
import FrameworkGrid from "../components/grid/skills-frameworks-grid";
import LanguageGrid from "../components/grid/skills-language-grid";

export default function Skills() {
    return (
        <>
            
                <Box as="section">
                    <Box as="section" maxW="xl" margin="0 auto" my={12}>
                        <Heading fontWeight="bold" variant="h1">
                            Skills
                        </Heading>
                        <Text>
                            The web is an expansive and diverse ecosystem with
                            so much to choose from. I love to learn and am
                            always adding, updating, and improving my design
                            &amp; development toolbox. Here are some of the
                            technologies I&apos;m building with!
                        </Text>

                        <Stack
                            direction="column"
                            maxW="100%"
                            spacing={16}
                            mx="auto"
                            mt={8}
                        >
                            <Box>
                                <LanguageGrid />
                            </Box>
                            <Box>
                                <FrameworkGrid />
                            </Box>
                            <Box>
                                <DesignPlatformGrid />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            
        </>
    );
}
