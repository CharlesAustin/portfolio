import Hero from "../components/hero";
import { Box } from "@chakra-ui/react";
import FeaturedWorks from "../components/featured-works";

export default function Home() {
  return (
    <Box pb={12}>
      <Hero />
      <FeaturedWorks />
    </Box>
  )
}
