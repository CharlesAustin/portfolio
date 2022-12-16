import NextLink from "next/link";
import {
    Box,
    Stack,
    Card,
    Heading,
    CardHeader,
    CardBody,
    Image,
    Text,
    Link,
    Flex
} from "@chakra-ui/react";

export default function FeaturedWorks() {
    // logic

    return (
        <Box as="section">
            <Heading mb={10}>Featured Projects</Heading>
            <Stack direction={{ base: "column", sm: "row" }} gap={8}>
                <Card>
                    <CardHeader>
                        <Heading>Dream Bucket</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <Flex gap={5} direction={{base: "column", md: "row"}}>
                            <Image
                                src="/images/dream-bucket-featured.png"
                                alt="mountain ranges in the distance"
                                fit="cover"
                                htmlHeight={175}
                                htmlWidth={175}
                                borderRadius={5}
                            />
                            <Text>
                                A mobile app to track and manage your bucket
                                list in a collaborative environment.
                                <Link
                                    as={NextLink}
                                    href="/work/dream-bucket"
                                    display="block"
                                >
                                    read more
                                </Link>
                            </Text>
                        </Flex>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading>Conservation Ontario</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <Flex gap={5} direction={{base: "column", md: "row"}}>
                            <Image
                                src="/images/conservation-featured.jpg"
                                alt="mountain ranges in the distance"
                                fit="cover"
                                htmlHeight={175}
                                htmlWidth={175}
                                height={175}
                                borderRadius={5}
                            />
                            <Text>
                                A mobile app to track and manage your bucket
                                list in a collaborative environment.
                                <Link
                                    as={NextLink}
                                    href="/work/conservation-ontario"
                                    display="block"
                                >
                                    read more
                                </Link>
                            </Text>
                        </Flex>
                    </CardBody>
                </Card>
            </Stack>
        </Box>
    );
}
