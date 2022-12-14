import NextLink from "next/link";
import {
    Box,
    Flex,
    Heading,
    Icon,
    Text,
    Link,
    LinkBox,
    LinkOverlay,
    HStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsMailbox2 } from "react-icons/bs";

export default function Contact() {
    const bgToggle = useColorModeValue("sapphire.500", "sapphire.50");
    const textToggle = useColorModeValue("white", "metal.900");

    return (
        <Box as="section" maxW="lg" margin="0 auto" pt={12}>
            <Heading as="h1" fontWeight="bold" variant="h1" mb={4}>
                Contact
            </Heading>
            <Text mb={5}>
                If you&apos;d like to discuss my work, opportunities, collaborate
                with me, or otherwise get in touch, I&apos;m available on the
                following platforms.
            </Text>
            <HStack gap={4} alignItems="flex-start">
                <Flex>
                    <Link
                        as={NextLink}
                        href="https://www.linkedin.com/in/austin-atkinson-0687978a/"
                        isExternal
                        display="flex"
                        bg={bgToggle}
                        color={textToggle}
                        variant="projectButton"
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
                            bg={bgToggle}
                            color={textToggle}
                            variant="projectButton"
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
                        bg={bgToggle}
                        color={textToggle}
                        variant="projectButton"
                    >
                        <Icon as={BsMailbox2} boxSize={6} mr={4} />
                        Email
                    </Link>
                </Flex>
            </HStack>
        </Box>
    );
}
