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
            color: useColorModeValue("black", "white"),
            title: "Figma",
        },
        {
            id: 1,
            image: SiMiro,
            color: useColorModeValue("black", "white"),
            title: "Miro",
        },
        {
            id: 2,
            image: SiAdobecreativecloud,
            color: useColorModeValue("black", "white"),
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

    return (
        <Card>
            <CardHeader>
                <Heading>Design Tools &amp; Platforms</Heading>
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
