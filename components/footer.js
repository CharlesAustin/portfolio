import {
    Box,
    Container,
    Flex,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./logo";
import GithubIcon from "./github-icon-link";
import LinkedInIcon from "./linkedin-icon-link";
import Copyright from "./copyright";

export default function Footer() {
    const darkMode = useColorModeValue("metal.50", "metal.800");

    return (
        <Box as="footer" py={10} backgroundColor={darkMode}>
            <Container maxW="container.lg">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ base: "column", md: "row" }}
                >
                    <Flex
                        alignItems="center"
                        direction={{ base: "column", md: "row" }}
                    >
                        <Box marginLeft={{ base: "2rem", md: "0" }}>
                            <Logo />
                        </Box>
                        <List
                            ml={{ base: "0", md: "3.3rem" }}
                            mt={{ base: "0.5rem", md: "0" }}
                            display="flex"
                            justifyContent={{
                                base: "center",
                                md: "flex-start",
                            }}
                        >
                            <ListItem px={4}>
                                <GithubIcon />
                            </ListItem>
                            <ListItem px={4}>
                                <LinkedInIcon />
                            </ListItem>
                        </List>
                    </Flex>
                    <Copyright />
                </Flex>
            </Container>
        </Box>
    );
}
