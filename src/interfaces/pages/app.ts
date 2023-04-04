// Import Modules
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';

// Define Page Layout Type
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

// Define App Props Type
export type MyAppProps = AppProps & {
    Component: NextPageWithLayout;
    emotionCache?: EmotionCache;
};
