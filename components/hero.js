import { Box, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Box as="section">
            <Heading size="sm">Greetings! I&apos;m Austin.</Heading>
            <Heading as="h1" size="4xl">
                Developer & Designer
            </Heading>
            <Text maxW="60ch">
                I&apos;m a web developer and UX/UI designer. I enjoy building
                projects for this living, breathing place we call the web.
                Passionate about the space where design & development
                intersects.
            </Text>
        </Box>
    );
}
