import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/500.css"
import "@fontsource/ibm-plex-sans/700.css"
import "@fontsource/ibm-plex-serif/400.css"
import "@fontsource/merriweather/400.css"
import theme from "../theme/theme";
import Script from "next/script";

function MyApp({ Component, pageProps}) {
    return (
		<ChakraProvider theme={theme}>
			<Script
			id="gtm-script"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
				(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-K4PHL3VW');
				`,
			}}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
