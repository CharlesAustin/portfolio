import {
    useColorModeValue,
    Grid,
    GridItem,
    Heading,
    Box,
    Tooltip,
    Card,
    CardHeader,
    CardBody,
    Icon,
    Flex,
    Tag,
    TagLabel
} from "@chakra-ui/react";

import {
    SiFigma,
    SiMiro,
    SiAdobecreativecloud,
    SiWordpress,
    SiShopify,
} from "react-icons/si";

export default function DesignPlatformGrid() {
    const brandIconSet = [
        {
            id: 0,
            image: SiFigma,
            color: "black",
            title: "Figma",
        },
        {
            id: 1,
            image: SiMiro,
            color: "brand.miroYellow",
            title: "Miro",
        },
        {
            id: 2,
            image: SiAdobecreativecloud,
            color: "brand.adobeRed",
            title: "Adobe Creative Cloud",
        },
        {
            id: 3,
            image: SiWordpress,
            color: "brand.wordpressBlue",
            title: "WordPress",
        },
        {
            id: 4,
            image: SiShopify,
            color: "brand.shopifyGreen",
            title: "Shopify",
        },
    ];

    const colorToggle = useColorModeValue("black", "white");

    return (
        <>
            <Flex justify="center" mb={5} gap={3}>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Design Tools</Heading>
                    </TagLabel>
                </Tag>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Platforms</Heading>
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
                                display="flex"
                                align="center"
                                key={icon.id}
                                transition="150ms all cubic-bezier(0.175, 0.885, 0.3, 1.9)"
                                _hover={{ transform: "scale(1.2)" }}
                            >
                                <Tooltip hasArrow label={icon.title} fontFamily="'IBM Plex Sans', sans-serif">
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
