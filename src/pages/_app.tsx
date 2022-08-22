import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../styles/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Head>
        <title>Markdown Editor</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
