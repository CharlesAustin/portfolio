import {
    useColorModeValue,
    Grid,
    GridItem,
    Heading,
    Box,
    Card,
    CardHeader,
    CardBody,
    Icon,
    Tooltip,
    Flex,
    Tag,
    TagLabel
} from "@chakra-ui/react";

import {
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiChakraui,
} from "react-icons/si";

export default function FrameworkGrid() {
    const brandIconSet = [
        {
            id: 0,
            image: SiTailwindcss,
            color: "brand.tailwindTeal",
            title: "Tailwind CSS",
        },
        {
            id: 1,
            image: SiBootstrap,
            color: "brand.bootstrapPurple",
            title: "Bootstrap",
        },
        {
            id: 2,
            image: SiReact,
            color: "brand.reactBlue",
            title: "React",
        },
        {
            id: 3,
            image: SiNextdotjs,
            color: "black",
            title: "Next.js",
        },
        {
            id: 4,
            image: SiChakraui,
            color: "brand.chakraGreen",
            title: "Chakra UI",
        },
    ];

    const colorToggle = useColorModeValue("black", "white");

    return (
        <>
            <Flex justify="center" mb={5} gap={3}>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Frameworks</Heading>
                    </TagLabel>
                </Tag>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Libraries</Heading>
                    </TagLabel>
                </Tag>
            </Flex>
            <Card>
                <CardBody>
                    <Grid
                        gridTemplateColumns={{
                            base: "repeat(auto-fit, 2rem)",
                            sm: "repeat(auto-fit, 3rem)",
                        }}
                        gap={6}
                        justifyContent="center"
                    >
                        {brandIconSet.map((icon) => (
                            <GridItem
                                key={icon.id}
                                _hover={{ transform: "scale(1.2)" }}
                            >
                                <Tooltip hasArrow label={icon.title}>
                                    <Box as="span">
                                        <Icon
                                            as={icon.image}
                                            display="flex"
                                            boxSize={{
                                                base: "2rem",
                                                sm: "3rem",
                                            }}
                                            color={colorToggle}
                                            _hover={{ color: icon.color }}
                                        />
                                    </Box>
                                </Tooltip>
                            </GridItem>
                        ))}
                    </Grid>
                </CardBody>
            </Card>
        </>
    );
}
