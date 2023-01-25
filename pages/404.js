import NextLink from "next/link";
import { Center, Box, Heading, Text, Link } from "@chakra-ui/react";
import CtaLink from "../components/cta-button";

export default function Error404() {
    return (
        <Box as="section" h={600}>
            <Center h="full">
                <Box textAlign="center">
                    <Heading as="h1" fontSize={{ base: 100, md: 150 }}>
                        404
                    </Heading>
                    <Heading as="h2">Oops!</Heading>
                    <Text>Doesn&apos;t look like anything to me...</Text>
                    <CtaLink linkAddress="/" linkLabel="Back to the good stuff" />
                </Box>
            </Center>
        </Box>
    );
}
