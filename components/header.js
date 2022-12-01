import Logo from "./logo";
import Navbar from "./navbar";
import { Box, Flex, Container } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

export default function Header({ children }) {
    return (
        <Box as="header" py={5}>
            <Container maxW="container.xl">
                <Flex alignItems="center">
                    <Logo />
                    <Navbar />
                    <ThemeToggleButton />
                </Flex>
            </Container>
        </Box>
    );
}
