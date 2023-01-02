import { SiLinkedin } from "react-icons/si";
import { Link, Icon } from "@chakra-ui/react";

export default function LinkedInIcon() {
    return (
        <Link
            display="flex"
            align="center"
            isExternal
            href="https://www.linkedin.com/in/austin-atkinson-0687978a/"
            padding={2}
            _hover={{ color: "sapphire.200" }}
        >
            <Icon
                as={SiLinkedin}
                boxSize="1.25rem"
                title="Austin Atkinson LinkedIn"
                
            />
        </Link>
    );
}
