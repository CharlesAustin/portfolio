import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle colour theme"
            colorScheme={useColorModeValue("toggleSapphire", "toggleSapphire")}
            variant="ghost"
            icon={useColorModeValue(
                <MoonIcon/>,
                <SunIcon/>
            )}
            onClick={toggleColorMode}
        ></IconButton>
    );
}
