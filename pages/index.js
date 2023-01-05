import NextLink from "next/link";
import Hero from "../components/hero";
import {
    Box,
    Flex,
    Heading,
    Icon,
    Text,
    Link,
    HStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsMailbox2 } from "react-icons/bs";

export default function Home() {
    const textToggle = useColorModeValue("metal.900", "white");
    return (
        <Box pb={12}>
            <Hero />
            <Box as="section">
                <HStack gap={4} alignItems="flex-start">
                    <Flex>
                        <Link
                            as={NextLink}
                            href="https://www.linkedin.com/in/austin-atkinson-0687978a/"
                            isExternal
                            display="flex"
                            color={textToggle}
                            variant="contactMeButton"
                        >
                            <Icon as={SiLinkedin} boxSize={6} mr={4} />
                            LinkedIn
                        </Link>
                    </Flex>
                    <Flex alignItems="center">
                        <Box>
                            <Link
                                as={NextLink}
                                href="https://github.com/CharlesAustin"
                                isExternal
                                display="flex"
                                alignItems="center"
                                color={textToggle}
                                variant="contactMeButton"
                            >
                                <Icon as={SiGithub} boxSize={6} mr={4} />
                                CharlesAustin
                            </Link>
                        </Box>
                    </Flex>
                    <Flex alignItems="center">
                        <Link
                            as={NextLink}
                            href="mailto:austin_a22@hotmail.com"
                            isExternal
                            display="flex"
                            alignItems="center"
                            color={textToggle}
                            variant="contactMeButton"
                        >
                            <Icon as={BsMailbox2} boxSize={6} mr={4} />
                            Email
                        </Link>
                    </Flex>
                </HStack>
            </Box>
        </Box>
    );
}
