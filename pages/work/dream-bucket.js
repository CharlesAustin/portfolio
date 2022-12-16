import NextLink from "next/link";
import { Box, Heading, Text, Image, Link, Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function DreamBucketProject() {
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
                Dream Bucket
            </Heading>
            <Box pb={8}>
                <Text>
                    The Dream Bucket is an app for users to create their
                    ultimate bucket list. Users are able to search and add items
                    as well as add their own ideas. They can create financial
                    goals, rank their bucket list items and add a timeline to
                    complete a particular goal. In addition, they will be able
                    to join communities of like-minded individuals to make
                    connections and go on adventures together.
                </Text>
                <Image
                    src="/images/dream-bucket-logo.png"
                    borderRadius={5}
                    alt="dream bucket"
                    my={8}
                />
                <Text pb={4}>
                    The Problem: When people think of a bucket list, they think
                    of those paper lists where they write down their dreams.
                    Those pieces of papers can be misplaced. Or, people think
                    they will just remember those bucket list items and
                    don&apos;t even write them down at all.
                </Text>
                <Text pb={4}>
                    The Solution: The Dream Bucket app will keep track of your
                    list and provide suggestions if one is looking for
                    inspiration. The app also allows people to share their list
                    with friends or other users with similar interests. A handy
                    financial tool allows users to budget for their dreams.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Research Objectives</Heading>
                <Text>
                    Through our initial interviews with potential users, we
                    asked some of the following questions: Tell me about some of
                    the items or experiences you have or would add to a bucket
                    list? How would you manage the information you gather for
                    your bucket list experiences? If you were to use an
                    application or website to manage your bucket list, what
                    would it include?
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Research Statistics</Heading>
                <Text pb={4}>
                    60% thought that some type of timeline or categorizing list
                    items by time (short, mid, long-term) would be useful
                </Text>
                <Text pb={4}>
                    85% of those interviewed would use a bucket list app.
                </Text>
                <Text pb={4}>
                    45% would like to share their list items on social media or
                    within the app.
                </Text>
                <Text pb={4}>
                    85% presently keep their bucket list items on their devices
                    or in a text document.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Competitor Analysis</Heading>
                <Text>
                    We conducted a competitor analysis on three apps that were
                    direct competitors (iBucket, TripBucket and Visited) and two
                    that were indirect (Wanderlog and Tripit). The team focused
                    the research on User Interface elements and User Experience
                    Flows - including the Sign Up process, Application Strengths
                    and Weaknesses, User Reviews and the Features.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Insight Statement</Heading>
                <Text>
                    Linda, a Business Analytics Director, is excited about
                    traveling and checking items off her bucket list. She needs
                    a tool to help her find items for her list and allow her to
                    share her experiences with family and friends (new and old).
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Problem Statement</Heading>
                <Text>
                    The Dream Bucket was designed for users to achieve their
                    ultimate bucket list goals. Based on our preliminary
                    research, users don&apos;t currently use an application or
                    website to manage their bucket list but rather write down
                    their ideas, which can be easily lost or misplaced.
                </Text>
                <Text>
                    The Dream Bucket app was designed so that our customers are
                    successful by allowing our users to organize their ideas,
                    get suggestions based on their saved items, share their
                    bucket lists to find like-minded users, and organize their
                    finances for their items.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>UX Hypothesis</Heading>
                <Text>
                    We believe that having an app where a user can track and
                    manage their goals will result in increasing user engagement
                    and satisfaction. We will know this is true when users can
                    financially manage their goals and join a like-minded
                    community that keeps them engaged.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Empathy Map</Heading>
                <Text>
                    We built an Empathy Map to get inside of the user’s head to
                    understand what they are looking for in a bucket list app.
                    We found users were looking for ways to find new items along
                    with adding their own bucket list items, they wanted to set
                    financial goals and adding their own timelines was also
                    important.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>User Flow</Heading>
                <Image
                    src="/images/db-user-flow.png"
                    alt="user flow"
                    borderRadius={5}
                    my={8}
                />
                <Text>
                    or our User Flow process, we considered the most important
                    features and tasks that our users would go through, such as
                    logging in as a first time user, searching the bucket list
                    items and saving an item to their personal bucket list.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Low Fidelity Wireframes</Heading>
                <Image
                    src="/images/db-login.png"
                    alt="login page wireframe"
                    my={8}
                />
                <Image
                    src="/images/db-dashboard.png"
                    alt="dashboard wireframe"
                    my={8}
                />
                <Image
                    src="/images/db-search-results.png"
                    alt="search results wireframe"
                    my={8}
                />
                <Image
                    src="/images/db-search-item.png"
                    alt=" search item wire frame"
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>Moodboard</Heading>
                <Image src="/images/db-moodboard.png" alt="Moodboard" my={8} />
                <Text>
                    To find the look and feel of the app we pulled together some
                    colours and images we felt worked with the existing logo
                    colours. After checking contrast ratio and blind-safe
                    colours we landed on the colours you see here.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Mid Fidelity Prototype</Heading>
                <Text>
                    Building upon our wireframes and our moodboard, we created a
                    Mid-Fidelity version of the Dream Bucket.
                </Text>
                <Image
                    src="/images/db-mid-coaching.png"
                    alt="mid fidelity coaching"
                    my={8}
                />
                <Image
                    src="/images/db-mid-dash.png"
                    alt="mid fidelty dash"
                    my={8}
                />
                <Image
                    src="/images/db-mid-profile.png"
                    alt="mid fidelity profile"
                    my={8}
                />
                <Image
                    src="/images/db-mid-bucket-list-item.png"
                    alt="mid fidelity list item"
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>Iterations</Heading>
                <Text pb={4}>
                    From user testing feedback we iterated our pages to create a
                    better user experience.
                </Text>
                <Text pb={4}>
                    A Goals page seemed redundant to users – it was the same as
                    the Bucket List page. Dreams was confusing, it was meant to
                    be Suggestions but we integrated that into the Search page.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Style Guide</Heading>
                <Image
                    src="/images/db-styleguide.png"
                    alt="style guide"
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>Web Wireframes</Heading>
                <Image
                    src="/images/db-homepage-wf.png"
                    alt="homepage web wireframes"
                    my={8}
                />
                <Text>
                    We created a marketing website that would introduce Dream
                    Bucket to potential users and direct them to the app. We
                    included elements such as features of the app, reviews,
                    news, our partners, and a call to action that directs them
                    to download the iOS or Android version of the app.
                </Text>
            </Box>

            <Box pb={8}>
                <Heading>Web Pages</Heading>
                <Text>
                    From the wireframes we created the high fidelity mockup
                    using HTML, CSS and JavaScript and deployed via Github
                    Pages.
                </Text>
                <Image
                    src="/images/db-hi-webpage-home.png"
                    alt="webpage hi fidelity mockup"
                    my={8}
                />
            </Box>

            <Box pb={8}>
                <Heading>Final Thoughts</Heading>
                <Image
                    src="/images/db-final-thoughts.png"
                    alt="people standing in sunset"
                    my={8}
                />
                <Text>
                    Our main challenge was understanding how users collect their
                    bucket list items and figuring out how we could make the
                    process of collecting these lists much easier for the users.
                    We created an app that not only allowed the user to add a
                    bucket list item but also track their saving goals, a
                    timeline to hit that goal and a budgeting option.
                </Text>
                <Text>
                    In the future we would like to add a community feature that
                    creates a more interactive experience for our users by
                    linking them with like-minded individuals.
                </Text>
            </Box>
        </Box>
    );
}
