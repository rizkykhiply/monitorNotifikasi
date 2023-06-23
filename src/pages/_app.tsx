// Import Modules
import { ReactElement, ReactNode } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { SWRConfig } from 'swr/_internal';
import Head from 'next/head';
import nProgress from 'nprogress';

// Import Material Modules
import { CssBaseline, ThemeProvider } from '@mui/material';

// Import Context
import { StoreContextProvider } from '@context/store/context';

// Import Libs
import { createEmotionCache } from '@lib/utils';

// Import Global Styles
import theme from '@styles/theme';
import '@styles/globals.css';
import '@styles/loader.css';

// Define Page Layout
type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

// Define App Props
export type MyAppProps = AppProps & {
    Component: NextPageWithLayout;
    emotionCache?: EmotionCache;
};

// Define Client Side Cache
const clientSideEmotionCache = createEmotionCache();

// Define App Page
const App = (props: MyAppProps) => {
    // Destructuring Props
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    // Define Layout Component
    const getLayout = Component.getLayout ?? ((page) => page);

    // Define Progess Route
    nProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', nProgress.start);
    Router.events.on('routeChangeError', nProgress.done);
    Router.events.on('routeChangeComplete', nProgress.done);

    return (
        <SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <StoreContextProvider>
                <CacheProvider value={emotionCache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                </CacheProvider>
            </StoreContextProvider>
        </SWRConfig>
    );
};

// Export App Page
export default App;
