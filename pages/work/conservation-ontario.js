import NextLink from "next/link";
import { Box, Heading, Text, Image, Link, Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function ConservationOntarioProject() {
    return (
        <Box as="section" maxW="xl" margin="0 auto" py={12}>
            <Link
                as={NextLink}
                href="/work"
                display="flex"
                alignItems="center"
                _hover={{ color: "sapphire.500" }}
            >
                <Icon as={IoIosArrowBack} mr="5px"></Icon>
                Back to work
            </Link>
            <Heading>Case Study:</Heading>
            <Heading as="h1" variant="h1" fontWeight="bold">
                Conservation Ontario
            </Heading>

            <Box>
                <Image
                    src="/images/co-logo.svg"
                    alt="conservation ontario logo"
                    borderRadius={5}
                    my={10}
                />
                <Text pb={8}>
                    Our goal was to redesign the Conservation Ontario website to
                    enable users to book and plan their activities, while
                    ensuring the conservation, restoration and responsible
                    management of Ontario&apos;s water, land and natural habitats.
                </Text>
            </Box>

            <Heading pb={8}>Methodologies</Heading>
            <Box>
                <Heading>Competitor Analysis</Heading>
                <Text pb={8}>
                    This analysis provides our team with valuable insights to
                    develop a UX/UI strategy to enhance a product&apos;s user
                    experience and business value.
                </Text>
            </Box>
            <Box>
                <Heading>Heuristic Evaluation</Heading>
                <Text pb={8}>
                    Helps measure the usability of user interfaces in
                    independent walkthroughs and report issues.
                </Text>
            </Box>
            <Box>
                <Heading>Survey &amp; Interview</Heading>
                <Text pb={8}>
                    We Created Google Form Surveys and posted on social media
                    with more than 20 responses. In addition, we Conducted 5
                    user structured interviews with candidates that corresponds
                    to the proto-persona with 8 open-ended questions &amp;amp; multiple
                    follow-up questions.
                </Text>
            </Box>
            <Box>
                <Heading>User Observations</Heading>
                <Text pb={8}>
                    Using a website analysis &amp; market intelligence platform to
                    gain analytics information about Conservation Ontario,
                    including social traffic, engagement analysis, audience
                    demographics, and audience interests.
                </Text>
            </Box>
            <Box>
                <Heading>Competitor Analysis</Heading>
                <Text pb={8}>
                    Straightforward and easy to understand. Easy onboarding and
                    easy navigation.Better layout of information, clear labels
                    for categories, clean look and feel. Navigation feels clear
                    and easy to find desired sections/pages.
                </Text>
            </Box>
            <Box>
                <Heading>Heuristic Evaluation</Heading>
                <Image
                    src="/images/co-heuristic.png"
                    alt="heuristic evaluation of a webpage"
                    borderRadius={5}
                    my={8}
                />
                <Text pb={8}>
                    Accessibility issues: The titles and subtitles over the
                    images are not legible.
                </Text>
                <Text pb={8}>
                    UI system and content usage: The Navigation bar is not
                    appropriately placed as many different tabs and links have
                    placed too closely to it.
                </Text>
                <Text pb={8}>
                    Pain Points:Introductory paragraph is very close to the hero
                    image and abuses italic font-styles.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading pb={4}>User Observations</Heading>
                <Text>Total Visits 11k</Text>
                <Text>Bounce Rate 44.60%</Text>
                <Text>Pages Per Visit 1.98</Text>
                <Text>Average Visit Duration 47 seconds</Text>
            </Box>

            <Box pb={8}>
                <Heading pb={4}>Affinity Diagramming</Heading>
                <Image
                    src="/images/co-affinity-diagram.png"
                    alt="affinity diagram"
                    borderRadius={5}
                />
            </Box>
            {/* Define phase */}
            <Box pb={8}>
                <Heading pb={4}>User Persona</Heading>
                <Image
                    src="/images/co-persona.png"
                    alt="user persona headshot"
                    borderRadius={5}
                    pb={8}
                />
                <Text pb={4}>
                    Gaby is a 26 year old, Hamilton based Landscape architect.
                    Hiking? Absolutely! Relaxing lakeside? You bet! As a proud
                    dog owner and outdoor enthusiast, Gaby, loves spending her
                    summers exploring new hiking trails and conservation areas.
                    She is very passionate about landscape architecture and gets
                    the best ideas and most innovative ideas during her evenign
                    walks with her dog.
                </Text>
                <Text pb={4}>
                    Goals &amp; interests Enjoys spending time outdoors
                    Passionate about green-living Avid cross country skiier
                    Wants to contribute to and get involved in green
                    revitalization and conservancy projects.
                </Text>
                <Text pb={4}>
                    Pain Points &amp; Concerns Concerned about water quality of
                    local watersheds in her community. Wants an easier way to
                    get involved in public conservancy projects. Would like a
                    convenient way to organize and participate in fundraising
                    and awareness campaigns.
                </Text>
            </Box>
            <Box pb={8}>
                <Heading >User Insight</Heading>
                <Text>
                    Gaby is frustrated with using outdated websites that lack
                    moderate mapping system and online booking features that
                    would enable her to visit different conservation areas more
                    frequently. As a nature lover involved in environmental
                    initiatives, Gaby is also concerned about lack of up-to-date
                    information and resources for general public to raise
                    awareness and increase engagement within the local
                    communities.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Problem Statement</Heading>
                <Text>
                    Current websites for parks and protected areas are designed
                    for sharing information and resources to enable users to
                    book and plan their activities and the main issue for users
                    is confusing navigation system, overwhelming amount of
                    information, and lack of modern website design to
                    accommodate for online booking. Based on our preliminary
                    study we have observed these platforms do not provide online
                    booking, advanced filtering options, updated information,
                    accessible UI system, so the users can feel more confident
                    about gathering information and planning their visit
                    accordingly.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Flow</Heading>
                <Image
                    src="/images/co-user-flow.png"
                    alt="user flow diagram"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    We crafted a user flow to define the steps a typical user
                    takes to sign-up and make a booking.
                </Text>
            </Box>
            <Box pb={8}>
                <Heading>Wireframes</Heading>
                <Image
                    src="/images/co-mainpage-wf.jpg"
                    alt="affinity diagram"
                    borderRadius={5}
                    my={8}
                />
                <Text>An example wireframe of the homepage.</Text>
            </Box>
            <Box>
                <Heading>Style Tile</Heading>
                <Image
                    src="/images/co-style-tile.png"
                    alt="style tile"
                    borderRadius={5}
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>High Fidelity Mockups</Heading>
                <Image
                    src="/images/co-hi-homepage.png"
                    alt="affinity diagram"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    Our high fidelity mockups aimed to fix the issues identified
                    with the exisiting site.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Iterations</Heading>
                <Image
                    src="/images/co-iteration-1.png"
                    alt="iteration-1"
                    borderRadius={5}
                    my={8}
                />
                <Text>Events Page</Text>
                <Image
                    src="/images/co-iteration-2.png"
                    alt="iteration-2"
                    borderRadius={5}
                    mt={8}
                />
                <Text>Interactive Map</Text>
                <Image
                    src="/images/co-iteration-3.png"
                    alt="iteration-3"
                    borderRadius={5}
                    mt={8}
                />
                <Text>Profile Icon</Text>
            </Box>
            <Box>
                <Heading>Conclusion</Heading>
                <Image
                    src="/images/co-mockup-desktop.png"
                    alt="mockup of website on desktop"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    If we had more time, we would have loved to design the
                    resources page and the conservation authorities as
                    information on these pages add so much value in preserving
                    natural resources and promoting awareness and education on
                    climate change and environmental issues and policies.
                </Text>
            </Box>
        </Box>
    );
}
