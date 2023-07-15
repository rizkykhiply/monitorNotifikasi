// Import Modules
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

// Import Global Styles
import '@styles/globals.css';

// Define Global Font
const roboto = Roboto({
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
            <div className={roboto.className}>
                <Component className {...pageProps} />
            </div>
        </SWRConfig>
    );
};

// Export App Page
export default App;
