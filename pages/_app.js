import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import InfoProvider from "../providers/InfoProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <InfoProvider>
        <Component {...pageProps} />
      </InfoProvider>
    </ChakraProvider>
  );
}

export default MyApp;
