import { Box } from "@chakra-ui/react";

export default function Copyright() {
    return (
        <Box as="p" fontFamily={"'IBM Plex Sans', sans-serif"}>
            &copy; Austin Atkinson {new Date().getFullYear()}
        </Box>
    );
}
