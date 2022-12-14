import NextLink from "next/link";
import {
    Box,
    Heading,
    Flex,
    Text,
    Image,
    Container,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Work() {
    const bgButtonToggle = useColorModeValue("sapphire.500", "sapphire.50");
    const colorToggle = useColorModeValue("white", "sapphire.900");
    const boxBgToggle = useColorModeValue("metal.50", "metal.800");

    return (
        <Box as="section" py={12}>
            <Box maxW="lg" margin="0 auto">
                <Heading as="h1" fontWeight="bold" variant="h1" mb={8}>
                    Work
                </Heading>
            </Box>
            <Box maxWidth="2xl" margin="0 auto">
                <Flex
                    bg={boxBgToggle}
                    justifyContent="center"
                    gap={8}
                    p={8}
                    borderRadius={5}
                    mb={12}
                >
                    <Box
                        w="175px"
                        height="175px"
                        borderRadius={5}
                        flexShrink={0}
                    >
                        <Image
                            borderRadius={8}
                            height="100%"
                            width="100%"
                            fit="cover"
                            src="./images/conservation-featured.jpg"
                            alt="feature image here"
                        />
                    </Box>
                    <Box>
                        <Heading as="h2" variant="h2" size="lg">
                            Conservation Ontario
                        </Heading>
                        <Text my={4}>
                            A redesign of the existing Conservation Ontario
                            website, using best-practice UI principles to
                            deliver a modern and accessible solution.
                        </Text>
                        <Link
                            as={NextLink}
                            display="inline-block"
                            href="./work/conservation-ontario"
                            variant="projectButton"
                            backgroundColor={bgButtonToggle}
                            color={colorToggle}
                        >
                            View Case Study
                        </Link>
                    </Box>
                </Flex>

                <Flex
                    bg={boxBgToggle}
                    justifyContent="center"
                    gap={8}
                    p={8}
                    borderRadius={5}
                    mb={12}
                >
                    <Box
                        w="175px"
                        height="175px"
                        borderRadius={5}
                        flexShrink={0}
                    >
                        <Image
                            borderRadius={8}
                            height="100%"
                            width="100%"
                            fit="cover"
                            src="./images/dream-bucket-featured.png"
                            alt="multiple snowy mountain peaks far away"
                        />
                    </Box>
                    <Box>
                        <Heading as="h2" variant="h2" size="lg">
                            Dream Bucket
                        </Heading>
                        <Text my={4}>
                            A UX/UI case study for Dream Bucket, a mobile bucket
                            list app. This project sees the progression of the
                            app from research to functioning mockup and
                            accompanying marketing site.
                        </Text>
                        <Link
                            as={NextLink}
                            display="inline-block"
                            href="./work/dream-bucket"
                            variant="projectButton"
                            backgroundColor={bgButtonToggle}
                            color={colorToggle}
                        >
                            View Case Study
                        </Link>
                    </Box>
                </Flex>
                <Flex
                    bg={boxBgToggle}
                    justifyContent="center"
                    gap={8}
                    p={8}
                    borderRadius={5}
                >
                    <Box
                        w="175px"
                        height="175px"
                        borderRadius={5}
                        flexShrink={0}
                    >
                        <Image
                            borderRadius={8}
                            height="100%"
                            width="100%"
                            fit="cover"
                            src="./images/nxttrip-featured.png"
                            alt="smiling woman wearing sunglasses leaning against a truck"
                        />
                    </Box>
                    <Box>
                        <Heading as="h2" variant="h2" size="lg">
                            NxtTrip
                        </Heading>
                        <Text my={4}>
                            A User Experience case study for NxtTrip, a mobile
                            app that helps travellers conveniently discover
                            activities at a destination based on their
                            interests.
                        </Text>
                        <Link
                            as={NextLink}
                            display="inline-block"
                            href="./work/nxt-trip"
                            variant="projectButton"
                            backgroundColor={bgButtonToggle}
                            color={colorToggle}
                        >
                            View Case Study
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
