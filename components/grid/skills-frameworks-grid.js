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
            color: useColorModeValue("black", "white"),
            title: "Next.js",
        },
        {
            id: 4,
            image: SiChakraui,
            color: "brand.chakraGreen",
            title: "Chakra UI",
        },
    ];

    return (
        <Card>
            <CardHeader>
                <Heading>Frameworks &amp; Libraries</Heading>
            </CardHeader>
            <CardBody>
                <Grid
                    gridTemplateColumns={{
                        base: "repeat(auto-fit, 3rem)",
                        md: "repeat(auto-fit, 4rem)",
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
                                        boxSize={{ base: "3rem", md: "4rem" }}
                                        color={icon.color}
                                    />
                                </Box>
                            </Tooltip>
                        </GridItem>
                    ))}
                </Grid>
            </CardBody>
        </Card>
    );
}
