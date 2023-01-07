import { SiGithub } from "react-icons/si";
import { Link, Icon } from "@chakra-ui/react";

export default function GithubIcon({display="flex"}) {
    return (
        
            <Link
                display={display}
                align="center"
                isExternal
                href="https://github.com/CharlesAustin"
                padding={2}
                _hover={{ color: "sapphire.200" }}
            >
                <Icon
                    as={SiGithub}
                    boxSize="1.25rem"
                    display={display}
                    title="Charles Austin GitHub"
                />
            </Link>
    
    );
}
