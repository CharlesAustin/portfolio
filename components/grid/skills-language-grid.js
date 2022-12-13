import {
    useColorModeValue,
    Grid,
    GridItem,
    Box,
    Tooltip,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Icon,
    Tag,
    TagLabel,
    Flex,
} from "@chakra-ui/react";
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiSass } from "react-icons/si";

export default function LanguageGrid() {
    const brandIconSet = [
        {
            id: 0,
            image: SiHtml5,
            color: "brand.htmlRed",
            title: "HTML",
        },
        {
            id: 1,
            image: SiCss3,
            color: "brand.cssBlue",
            title: "CSS",
        },
        {
            id: 2,
            image: SiJavascript,
            color: "brand.jsYellow",
            title: "JavaScript",
        },
        {
            id: 3,
            image: SiPhp,
            color: "brand.phpPurple",
            title: "Php",
        },
        {
            id: 4,
            image: SiSass,
            color: "brand.sassPink",
            title: "Sass",
        },
    ];

    const colorToggle = useColorModeValue("black", "white");

    return (
        <>
            <Flex justify="center" mb={5}>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Languages</Heading>
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
