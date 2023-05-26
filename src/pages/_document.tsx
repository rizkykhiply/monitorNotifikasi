// Import Modules
import { AppType } from 'next/app';
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// Import Libs
import { createEmotionCache } from '@lib/utils';

// Import Interfaces
import { MyAppProps, MyDocumentProps } from '@interfaces/pages';

// Import Base Theme
import theme from '@styles/theme';

// Define My Document
export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content={theme.palette.primary.main} />
                <meta name="emotion-insertion-point" content="" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
                <link rel="shortcut icon" href="/favicon.ico" />
                {emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

// Define My Document Initial Props
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
