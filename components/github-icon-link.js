import { SiGithub } from "react-icons/si";
import { Box, Link, Icon } from "@chakra-ui/react";

export default function GithubIcon() {
    return (
        <Box px={8}>
            <Link
                display="flex"
                align="center"
                isExternal
                href="https://github.com/CharlesAustin"
            >
                <Icon
                    as={SiGithub}
                    boxSize="1.25rem"
                    title="Charles Austin GitHub"
                    _hover={{ color: "sapphire.200" }}
                />
            </Link>
        </Box>
    );
}
