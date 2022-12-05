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

    return (
        <Card>
            <CardHeader>
                <Tag size="lg" variant="solid">
                    <TagLabel>
                        <Heading size={4}>Languages</Heading>
                    </TagLabel>
                </Tag>
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
