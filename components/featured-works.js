import {
    Box,
    Stack,
    Card,
    Heading,
    CardHeader,
    CardBody,
    Image,
    Text,
} from "@chakra-ui/react";

export default function FeaturedWorks() {
    // logic

    return (
        <Box as="section">
            <Heading>Featured Projects</Heading>
            <Stack direction={{ base: "column", sm: "row" }}>
                <Card>
                    <CardHeader>Featured Project</CardHeader>
                    <CardBody>
                        <Image src="" alt="Image here" />
                        <Text>lorem ipsum...</Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Featured Project</CardHeader>
                    <CardBody>
                        <Image src="" alt="Image here" />
                        <Text>lorem ipsum...</Text>
                    </CardBody>
                </Card>
            </Stack>
        </Box>
    );
}
