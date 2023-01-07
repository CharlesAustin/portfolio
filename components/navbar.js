import NextLink from "next/link";
import { useRouter } from "next/router";
import {
    Box,
    Flex,
    List,
    ListItem,
    Link,
    Menu,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorModeValue,
    useDisclosure,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GithubIcon from "./github-icon-link";

const NavItem = ({ href, children, ...props }) => {
    const router = useRouter();
    const active = router.pathname === href;
    const navBgToggle = useColorModeValue("sapphire.500", "sapphire.50");
    const navColorToggle = useColorModeValue("white", "metal.900");

    return (
        <Link
            as={NextLink}
            href={href}
            bg={active ? navBgToggle : undefined}
            color={active ? navColorToggle : undefined}
            {...props}
        >
            {children}
        </Link>
    );
};

export default function Navbar(href) {
    const navLinks = [
        { title: "skills", href: "/skills" },
        { title: "about", href: "/about" },
    ];

    const { isOpen, onOpen, onClose } = useDisclosure();
    const drawerToggle = useColorModeValue("metal.50", "metal.800");

    return (
        <Box as="nav" w="100%">
            <Flex justify="end" align="center">
                <Box display={{base: "block", md: "none"}}>
                    <Button onClick={onOpen} mr={4}>
                        <HamburgerIcon />
                    </Button>
                    <Drawer
                        placement="right"
                        isOpen={isOpen}
                        onClose={onClose}
                        size={{ base: "full", md: "xs" }}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody pt={10} bg={drawerToggle}>
                                {navLinks.map((link) => (
                                    <Link
                                        display="block"
                                        key={link.title}
                                        as={NextLink}
                                        href={link.href}
                                        _hover={{ bg: "metal.700" }}
                                        fontSize={20}
                                        py={2}
                                        px={4}
                                        borderRadius="50px"
                                        onClick={onClose}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                                    <GithubIcon/>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>

                <Menu isLazy>
                    <List display={{ base: "none", md: "flex" }}>
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.title}
                                fontFamily={"'IBM Plex Sans', sans-serif"}
                                textTransform="capitalize"
                            >
                                <NavItem
                                    as={NextLink}
                                    href={link.href}
                                    px={4}
                                    py={1}
                                    borderRadius="100px"
                                    _hover={{ textDecoration: "none" }}
                                >
                                    {link.title}
                                </NavItem>
                            </ListItem>
                        ))}
                    </List>
                    <Box px={8} display={{base: "none", md: "flex"}}>
                        <GithubIcon display={{base: "none", md: "flex"}}/>
                    </Box>
                </Menu>
            </Flex>
        </Box>
    );
}
