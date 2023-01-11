import {
    useColorModeValue,
    Grid,
    GridItem,
    Heading,
    Box,
    Tooltip,
    Card,
    CardBody,
    Icon,
    Flex,
    Tag,
    TagLabel,
} from "@chakra-ui/react";

export default function SkillsGrid({ titleTags, icons }) {
    const colorToggle = useColorModeValue("black", "white");
    const cardBgToggle = useColorModeValue("transparent", "metal.800");
    const cardBorderToggle = useColorModeValue("metal.50", "transparent");

    return (
        <>
            <Flex justify="center" mb={5} gap={3}>
                {titleTags.map((title) => (
                    <Tag size="lg" variant="solid" key={title} bg="metal.800">
                        <TagLabel>
                            <Heading size={4}>{title}</Heading>
                        </TagLabel>
                    </Tag>
                ))}
            </Flex>
            <Card bg={cardBgToggle} borderWidth="1px" borderStyle="solid" borderColor={cardBorderToggle}>
                <CardBody>
                    <Grid
                        gridTemplateColumns={{
                            base: "repeat(auto-fit, 2rem)",
                            sm: "repeat(auto-fit, 3rem)",
                        }}
                        gap={6}
                        justifyContent="center"
                    >
                        {icons.map((icon) => (
                            <GridItem
                                display="flex"
                                align="center"
                                key={icon.id}
                                transition="150ms all cubic-bezier(0.175, 0.885, 0.3, 1.9)"
                                _hover={{ transform: "scale(1.2)" }}
                            >
                                <Tooltip
                                    hasArrow
                                    label={icon.title}
                                    fontFamily="'IBM Plex Sans', sans-serif"
                                >
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
