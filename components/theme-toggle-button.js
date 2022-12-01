import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle colour theme"
            colorScheme={useColorModeValue("teal", "green")}
            icon={useColorModeValue(
                <FontAwesomeIcon icon={faSun} />,
                <FontAwesomeIcon icon={faMoon} />
            )}
            onClick={toggleColorMode}
        ></IconButton>
    );
}
