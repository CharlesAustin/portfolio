import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import colors from "../theme/styles/colors";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle colour theme"
            colorScheme={useColorModeValue("toggleSapphire", "toggleSapphire")}
            variant="outline"
            icon={useColorModeValue(
                <MoonIcon/>,
                <SunIcon/>
            )}
            onClick={toggleColorMode}
        ></IconButton>
    );
}
