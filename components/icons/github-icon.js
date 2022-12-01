import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Box, Link } from "@chakra-ui/react";

export default function GithubIcon() {
    return (
        <Box px={3}>
            <Link
                href="https://github.com/CharlesAustin"
                borderRadius="50%"
                border="2px solid transparent"
                _hover={{ borderColor: "orange" }}
            >
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
        </Box>
    );
}
