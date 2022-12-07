import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/500.css"
import "@fontsource/ibm-plex-sans/700.css"
import "@fontsource/merriweather/400.css"
import theme from "../theme/theme";

function MyApp({ Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
