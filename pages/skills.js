import {
    Box,
    Heading,
    Text,
    Stack
} from "@chakra-ui/react";
import SkillsGrid from "../components/skills-grid";
import { designIconSet } from "../data/design-icons";
import { frameworksIconSet } from "../data/framework-icons";
import { languagesIconSet } from "../data/language-icons";

export default function Skills() {
    return (
        <Box as="section" maxW="lg" margin="0 auto" py={12}>
            <Heading as="h1" fontWeight="bold" variant="h1" mb={4}>
                Skills
            </Heading>
            <Text>
                The web is an expansive and diverse ecosystem with so much to
                choose from. I love to learn and am always adding, updating, and
                improving my design &amp; development toolbox. Here are some of
                the technologies I&apos;m building with!
            </Text>

            <Stack direction="column" maxW="100%" spacing={16} mx="auto" mt={8}>
                <Box>
                    <SkillsGrid titleTags={["Languages"]} icons={languagesIconSet} />
                </Box>
                <Box>
                    <SkillsGrid titleTags={["Frameworks", "Libraries"]} icons={frameworksIconSet} />
                </Box>
                <Box>
                    <SkillsGrid titleTags={["Design Tools", "Platforms"]} icons={designIconSet} />
                </Box>
            </Stack>
        </Box>
    );
}
