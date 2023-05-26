// Import Modules
import { DocumentProps } from 'next/document';

// Define Document Props Interface
export interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[];
}
