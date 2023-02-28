// Import Modules
import { Router } from 'next/router';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr/_internal';
import Head from 'next/head';
import nProgress from 'nprogress';

// Import Interfaces
import { MyAppProps } from '@/interfaces/pages/app';

// Import Libs
import { createEmotionCache } from '@/lib/utils';
import { Api } from '@/lib/api';

// Import Global Styles
import theme from '@/styles/theme';
import '@/styles/globals.css';
import '@/styles/loader.css';

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
        <SWRConfig value={{ fetcher: (url: string) => Api(url).then((res) => res.data) }}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                </ThemeProvider>
            </CacheProvider>
        </SWRConfig>
    );
};

// Export App Page
export default App;
