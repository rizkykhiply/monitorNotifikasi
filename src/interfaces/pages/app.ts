// Import Modules
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';

// Define Type Page Layout
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

// Define Type App Props
export type MyAppProps = AppProps & {
    Component: NextPageWithLayout;
    emotionCache?: EmotionCache;
};
