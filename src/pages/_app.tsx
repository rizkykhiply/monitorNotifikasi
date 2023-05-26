// Import Modules
import { Router } from 'next/router';
import { CacheProvider } from '@emotion/react';
import { SWRConfig } from 'swr/_internal';
import Head from 'next/head';
import nProgress from 'nprogress';

// Import Material Modules
import { CssBaseline, ThemeProvider } from '@mui/material';

// Import Interfaces
import { MyAppProps } from '@interfaces/pages';

// Import Libs
import { createEmotionCache } from '@lib/utils';

// Import Context
import { StoreContextProvider } from '@context/store/context';

// Import Global Styles
import theme from '@styles/theme';
import '@styles/globals.css';
import '@styles/loader.css';

// Define Client Side Cache
const clientSideEmotionCache = createEmotionCache();

// Define App Page
const App = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const getLayout = Component.getLayout ?? ((page) => page);

    nProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', nProgress.start);
    Router.events.on('routeChangeError', nProgress.done);
    Router.events.on('routeChangeComplete', nProgress.done);

    return (
        <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}>
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
