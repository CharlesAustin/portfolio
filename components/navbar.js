import NextLink from "next/link";
import { useRouter } from "next/router";
import {
    Box,
    Flex,
    List,
    ListItem,
    Link,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GithubIcon from "./github-icon-link";

const NavItem = ({ href, children, ...props }) => {
    const router = useRouter();
    const active = router.pathname === href;
    const navBgToggle = useColorModeValue('sapphire.500', 'sapphire.50');
    const navColorToggle = useColorModeValue('white', 'metal.900')
    
    return (
        <Link
            as={NextLink}
            href={href}
            bg={active ? navBgToggle : undefined}
            color={active ? navColorToggle :  undefined}
            {...props}
        >
            {children}
        </Link>
    );
};

export default function Navbar(href) {

    
    const navLinks = [
        { title: "work", href: "/work" },
        { title: "skills", href: "/skills" },
        { title: "about", href: "/about" },
        { title: "contact", href: "/contact" },
    ];
    

    return (
        <Box as="nav" w="100%">
            <Flex justify="end" align="center">
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
                                    _hover={{textDecoration: "none"}}
                                >
                                    {link.title}
                                </NavItem>
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
                        {navLinks.map((link) => (
                            <MenuItem key={link.title}>
                                <Link
                                    as={NextLink}
                                    href={link.href}
                                    _activeLink={{ color: "red" }}
                                >
                                    {link.title}
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
}
