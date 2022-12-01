import NextLink from "next/link";
import {
    Box,
    Container,
    Flex,
    Stack,
    HStack,
    VStack,
    Link,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GithubIcon from "./icons/github-icon";

export default function Navbar() {
    const navItems = ["work", "skills", "about", "contact"];
    return (
        <Box as="nav" w="100%">
            <Flex justify="end">
                <Menu isLazy>
                    <HStack mr={5} display={{base: 'none', md: 'flex'}}>
                        {navItems.map((name) => (
                            <Box key={name}>
                                <Link as={NextLink} href={`/${name}`}>
                                    {name}
                                </Link>
                            </Box>
                        ))}
                        <GithubIcon />
                    </HStack>
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
