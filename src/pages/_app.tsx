// Import Modules
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

// Import Context
import { StoreContextProvider } from '@context/store/context';

// Import Global Styles
import '@styles/globals.css';

// Define Global Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
});

// Define App Page
const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <StoreContextProvider>
                <div className={poppins.className}>
                    <Component className {...pageProps} />
                </div>
            </StoreContextProvider>
        </SWRConfig>
    );
};

// Export App Page
export default App;
