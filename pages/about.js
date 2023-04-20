import NextLink from "next/link";
import {
    Box,
    Heading,
    Text,
    Image,
    Flex,
    Tag,
    useColorModeValue,
    TagLabel,
} from "@chakra-ui/react";
import CtaLink from "../components/cta-button";

export default function About() {
    const borderToggle = useColorModeValue("metal.500", "sapphire.50");

    return (
        <Box as="section" maxW="lg" margin="0 auto" py={12}>
            <Heading as="h1" fontWeight="bold" variant="h1" mb={4}>
                About
            </Heading>
            <Flex alignItems="center" mb={8}>
                <Image
                    src="../images/austin-profile.png"
                    alt="Austin Atkinson profile picture"
                    boxSize="100px"
                    borderRadius="50%"
                    borderWidth="3px"
                    borderColor={borderToggle}
                    borderStyle="solid"
                />
                <Box ml={4}>
                    <Heading as="h2" letterSpacing="-1px" mb={2}>
                        Austin Atkinson
                    </Heading>
                    <Tag size="md" variant="solid">
                        <TagLabel>
                            <Heading as="h3" size="xs">
                                Developer & Designer
                            </Heading>
                        </TagLabel>
                    </Tag>
                </Box>
            </Flex>
            <Text mb={5}>
                Hi! Thanks for stopping by. I&apos;m Austin, a web developer
                based in Canada 🇨🇦. I have an educational background in Graphic
                Design, Web Development, and most recently UX/UI Design. I love
                working with both development and design together to create
                impactful user experiences across the digital medium. Passionate
                about web stacks and the myriad technologies used across the
                internet.
            </Text>
            <Text mb={5}>
                I have past experience in the PHP space developing a variety of
                custom CMS solutions with WordPress and Drupal, and I&apos;ve
                worked on ecommerce projects via Shopify.
            </Text>
            <Text>
                I love to learn and am always looking to hone my skills,
                practice a new concept or technology, and learn from others.
                Right now I&apos;m working on exploring the JavaScript realm
                with React & Node.js! I&apos;ve also recently started working with Craft CMS.
            </Text>
            <CtaLink
                linkAddress="https://www.linkedin.com/in/austin-atkinson-0687978a/"
                linkLabel="Connect with Me"
            />
        </Box>
    );
}
