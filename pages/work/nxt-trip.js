import NextLink from "next/link";
import { Box, Heading, Text, Image, Link, Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function NxtTripProject() {
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
                NxtTrip
            </Heading>
            <Box pb={8}>
                <Text>
                    NxtTrip is a mobile travel app that allows travellers to
                    easily discover activities in a destination based on their
                    interests without having to spend hours on research.
                </Text>
                <Image
                    src="/images/nt-header.png"
                    alt="man scrolling through phone"
                    borderRadius={5}
                    my={8}
                />
            </Box>
            <Box pb={8}>
                <Heading>Interview Plan</Heading>
                <Text>
                    We conducted 6 user interviews to understand how people plan
                    their trips, the steps they take, the time it takes to plan
                    a trip. Ultimately, wanting to understand their
                    frustrations, if any, in their planning process.
                </Text>
            </Box>
            <Box pb={8}>
                <Heading>Interview Notes</Heading>
                <Text>
                    66% of participants said that researching activities in a
                    foreign city and planning their itinerary takes up majority
                    of their travel planning.
                </Text>
                <Text>
                    Shirley, age 28 “It would make travel planning easier if
                    there was a tool that can curate a list of activities or
                    food places based on my interest so I don&apos;t have to do as
                    much research on my own.”
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Affinity Diagram</Heading>
                <Image
                    src="/images/nt-affinity.png"
                    alt="affinity diagram"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    We sorted through our interview data to find common themes
                    amongst our interviewees.
                </Text>
            </Box>
            <Box pb={8}>
                <Heading>Empathy Map</Heading>
                <Text>
                    From our Affinity Map, we synthesized the data to understand
                    how a user feels, thinks, says, does, their pains and gains
                    about travel planning. We wanted to understand what
                    frustrated them the most and what they were looking to
                    achieve.
                </Text>
            </Box>
            <Box pb={8}>
                <Heading>User Persona</Heading>
                <Image
                    src="/images/nxttrip-featured.png"
                    alt="woman smiling"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    Sabrina is currently a Product Manager at Pinterest and
                    works remotely majority of the time. She is a highly
                    organized, efficient and creative. With her flexible
                    schedule and remote nature of her work, she loves to travel
                    to experience new cultures and embark on new adventures.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Insight</Heading>
                <Text>
                    Travellers need a way to easily discover activities/things
                    to do in a new city because there is so much information and
                    recommendations online which requires travelers to spend
                    time to research to find activities that suit their
                    interests.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Problem Statement</Heading>
                <Text>
                    t is difficult for travellers to discover activities/things
                    to do in a new city. We have observed that travellers spend
                    a lot of time researching for activities/things to do due to
                    the vast amount of information online.
                </Text>
                <Text>
                    How might we provide a platform where travellers can easily
                    discover activities/things to do in a new city that suit
                    their interests?
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Ideation</Heading>
                <Image
                    src="/images/nt-ifs.png"
                    alt="if statements"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    We used the “I Like, I Wish, What If” Ideation method to
                    brainstorm ideas through the lens of the user in the
                    present, near future, and distant future.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Ideation Process</Heading>
                <Image
                    src="/images/nt-iteration.png"
                    alt="iterations"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    After brainstorming, we created idea clusters to group
                    similar ideas together. We grouped our ideas into 5 clusters
                    and these clusters describe the type of solution: Itinerary
                    Planning Recommendation/Suggestions Feature Research Feature
                    Filter by Interests/Preferences Connecting with Travelers
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Value Proposition</Heading>
                <Text>
                    Our organization NxtTrip is developing a mobile travel app
                    to help busy travellers find curated activities and events
                    at the destination they are travelling to. We help users
                    craft better travel experiences, tailored to their
                    individual preferences. NxtTrip streamlines the process of
                    finding, researching, and experiencing travel activities and
                    events.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Wireframing</Heading>
                <Image
                    src="/images/nt-wireframes.png"
                    alt="wireframe example"
                    borderRadius={5}
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>User Testing Plan</Heading>
                <Text>
                    4 user tests were completed in-person. Tested was the
                    following: Objectives &amp; Goals Can users successfully create
                    an account and complete the onboarding process for the app?
                    Can a user successfully reset their password? Tasks &amp; Steps
                    Open the app and create an account, using your email to
                    sign-up. Complete the onboarding process. Open the app and
                    reset your password. Click on Forgot password? and follow
                    the prompts.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Testing Feedback</Heading>
                <Text>
                    During Testing 3 users were able to complete the signup
                    process 1 User had some confusion when they tried to sign-up
                    via Google Users were able to reset their passwords
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Testing Summary</Heading>
                <Image
                    src="/images/nt-priority-matrix.png"
                    alt="priority matrix"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    Users generally liked the text/headers Users didn&apos;t not
                    place a lot of value on the intro-onboarding screens Users
                    felt some information could be condensed (Phone number
                    screen, for example) Consistent navigation (back button)
                    giving users the freedom to move is valued How-tos have been
                    requested by users to show them some common tasks inside the
                    app (outside of the tasks that were tested)
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Iterated User Flow</Heading>
                <Image
                    src="/images/nt-user-flow.png"
                    alt="user flow"
                    borderRadius={5}
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>Final Thoughts</Heading>
                <Text pb={4}>
                    Start Strong, Finish Strong Good UX relies on starting off
                    on the right foot. I have found that the stronger the
                    beginning of the project was, the better the end results
                    were. Creating and iterating solid user research questions,
                    problem statements, and gathering accurate user data help in
                    each successive step of the design process.
                </Text>
                <Text pb={4}>
                    Eliminate Personal Bias I found throughout this process that
                    during design I often caught myself looking at a problem or
                    design step through the lens of my own bias (ex. Making an
                    assumption based on how I thought the user should login).
                    Whenever I caught myself doing this I reminded myself to
                    return to the Human Centered Design paradigm of UX and focus
                    on what our users had to say during the research phase.
                </Text>
                <Text pb={4}>
                    User feedback is important I found user feedback to be
                    invaluable. Looking at a project too long, I often found
                    myself missing things (as Paul Krug has mentioned in his
                    book Don&apos;t Make me Think) that the user caught. Having
                    the user thoroughly test helped me to identify and remedy
                    issues that otherwise would have gone unnoticed. This
                    feedback allowed me to iterate and ultimately create a
                    better product.
                </Text>
            </Box>
        </Box>
    );
}
