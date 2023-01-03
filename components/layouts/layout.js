import Head from "next/head";
import Header from "../header";
import Footer from "../footer";
import { Container, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Austin Atkinson Portfolio" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Austin Atkinson | Developer & Designer"
                />
                <meta
                    property="og:description"
                    content="Hi, I'm Austin! I'm a Web Developer & Designer."
                />
                <meta
                    property="og:image"
                    content="https://www.austin-atkinson.com/A-logo.svg"
                />
                <meta
                    property="og:site_name"
                    content="Austin Atkinson's Portfolio"
                />
                <meta
                    property="og:url"
                    content="https://www.austin-atkinson.com/"
                />

                <meta
                    name="twitter:title"
                    content="Austin Atkinson | Developer & Designer"
                />
                <meta
                    name="twitter:description"
                    content="Hi, I'm Austin! I'm a Web Developer & Designer."
                />
                <meta
                    name="twitter:image"
                    content="https://www.austin-atkinson.com/A-logo.svg"
                />

                <title>Austin Atkinson</title>
            </Head>
            <Header />
            <Box as="main" minH={{base: "calc(100vh - 264px)", md: "calc(100vh - 196px)"}}>
                <Container maxW="container.lg">{children}</Container>
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
