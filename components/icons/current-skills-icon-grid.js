import {
    faHtml5,
    faCss3,
    faSquareJs,
    faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorModeValue, Grid, GridItem, Heading } from "@chakra-ui/react";

export default function CurrentSkillsGrid() {
    const brandIconSet = [
        {
            id: 0,
            image: faHtml5,
            color: useColorModeValue("teal", "green"),
            title: "HTML",
        },
        {
            id: 1,
            image: faCss3,
            color: useColorModeValue("teal", "green"),
            title: "CSS",
        },
        {
            id: 2,
            image: faSquareJs,
            color: useColorModeValue("teal", "green"),
            title: "JavaScript",
        },
        {
            id: 3,
            image: faPhp,
            color: useColorModeValue("teal", "green"),
            title: "Php",
        },
    ];

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {brandIconSet.map((icon) => (
                <GridItem key={icon.id}>
                    <FontAwesomeIcon
                        icon={icon.image}
                        size="5x"
                        color={icon.color}
                        title={icon.title}
                    />
                </GridItem>
            ))}
        </Grid>
    );
}
