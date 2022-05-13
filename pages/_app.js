import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import "../style.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp