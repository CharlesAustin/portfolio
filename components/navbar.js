import NextLink from "next/link";
import {
    Box,
    Flex,
    HStack,
    List,
    ListItem,
    Link,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    chakra,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GithubIcon from "./github-icon-link";

export default function Navbar({ path, href }) {
    const navLinks = [
        { title: "work", href: "/work" },
        { title: "skills", href: "/skills" },
        { title: "about", href: "/about" },
        { title: "contact", href: "/contact" },
    ];
    const navItems = ["work", "skills", "about", "contact"];
    const NavLink = chakra(NextLink, {
        shouldForwardProp: (prop) => {
            ["href", "target", "children", ...prop];
        },
    });

    return (
        <Box as="nav" w="100%">
            <Flex justify="end" align="center">
                <Menu isLazy>
                    <List display={{ base: "none", md: "flex" }}>
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.title}
                                ml={8}
                                fontFamily={"'IBM Plex Sans', sans-serif"}
                                textTransform="capitalize"
                            >
                                <Link
                                    as={NextLink}
                                    href={link.href}
                                    _activeLink={{ color: "blue" }}
                                >
                                    {link.title}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Box px={8}>
                        <GithubIcon />
                    </Box>
                    <MenuButton
                        as={IconButton}
                        aria-label="Main nav"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        display={{ base: "inline-flex", md: "none" }}
                        mr={5}
                    />
                    <MenuList>
                        {navItems.map((name) => (
                            <MenuItem key={name}>
                                <Link
                                    as={NextLink}
                                    href={`/${name}`}
                                    key={name}
                                >
                                    {name}
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
}
