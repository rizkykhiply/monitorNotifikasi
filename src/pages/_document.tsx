// Import Modules
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Import Libs
import { createEmotionCache } from '@lib/utils';

// Import Base Theme
import theme from '@styles/theme';

// Define My Document
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <meta name="emotion-insertion-point" content="" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// Define My Document Initial Props
MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style data-emotion={`${style.key} ${style.ids.join(' ')}`} key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
