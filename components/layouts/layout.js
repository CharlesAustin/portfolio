import Head from "next/head";
import Header from "../header";
import { Container } from "@chakra-ui/react";
// Add footer...

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
            <Container maxW="container.xl">{children}</Container>
        </>
    );
};

export default Layout;
