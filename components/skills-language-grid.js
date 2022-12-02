import {
    faHtml5,
    faCss3,
    faSquareJs,
    faPhp,
    faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorModeValue, Grid, GridItem, Icon } from "@chakra-ui/react";

export default function LanguageGrid() {
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
        {
            id: 4,
            image: faSass,
            color: useColorModeValue("teal", "green"),
            title: "Sass",
        },
    ];

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {brandIconSet.map((icon) => (
                <GridItem key={icon.id} _hover={{ transform: "scale(1.2)" }}>
                    <FontAwesomeIcon
                        icon={icon.image}
                        size="5x"
                        color={icon.color}
                        title={icon.title}
                    />
                </GridItem>
            ))}
            <GridItem>
                <Icon viewBox="0 0 122.88 73.29" fontSize="5em">
                    <path
                    fill={useColorModeValue("teal", "green")}
                        d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
                    />
                </Icon>
            </GridItem>
        </Grid>
    );
}
