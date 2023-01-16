import { Box } from "@chakra-ui/react";

export default function Copyright() {
    return (
        <Box as="p">
            &copy; Austin Atkinson {new Date().getFullYear()}
        </Box>
    );
}
