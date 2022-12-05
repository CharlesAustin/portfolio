import { SiGithub } from "react-icons/si";
import { Box, Link, Icon } from "@chakra-ui/react";

export default function GithubIcon() {
    return (
        <Box px={3}>
            <Link
                href="https://github.com/CharlesAustin"
                borderBottom="2px solid transparent"
                _hover={{ borderColor: "orange" }}
            >
                <Icon as={SiGithub} boxSize="1rem" />
            </Link>
        </Box>
    );
}
