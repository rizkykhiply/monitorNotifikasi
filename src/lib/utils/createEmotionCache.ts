// Import Modules
import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// Define Emotion Cache For Overriding Style
const createEmotionCache = () => {
    let insertionPoint;

    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }

    return createCache({ key: 'mui-style', insertionPoint });
};

// Export Emotion Cache
export { createEmotionCache };
