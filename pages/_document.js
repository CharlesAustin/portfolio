import {ColorModeScript} from "@chakra-ui/react";
import {Html, Head, Main, NextScript} from "next/document";
import theme from "../theme/theme";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en" style={{overflowY: "scroll"}}>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest"/>
			</Head>
			<body>
			<div dangerouslySetInnerHTML={{
				__html: `
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4PHL3VW"
							height="0" width="0" style="display:none;visibility:hidden"></iframe>
				</noscript>
				`,
			}}
				 />

			<ColorModeScript
				initialColorMode={theme.config.initialColorMode}
			/>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
