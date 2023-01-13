import Logo from "./logo";
import Navbar from "./navbar";
import { Box, Flex, Container } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

export default function Header() {
    return (
        <Box as="header" py={5}>
            <Container maxW="container.lg">
                <Flex alignItems="center">
                    <Logo />
                    <Navbar />
                    <ThemeToggleButton />
                </Flex>
            </Container>
        </Box>
    );
}
