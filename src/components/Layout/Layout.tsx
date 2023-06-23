import { ReactElement } from 'react';

// Import Components
import ContentComponent from '../Content/Content';

// Define Props Layout
interface PropsLayout {
    children: ReactElement;
}

// Define Layout Component
const LayoutComponent = (props: PropsLayout) => {
    // Destructuring Props
    const { children } = props;

    return <ContentComponent>{children}</ContentComponent>;
};

// Export Layout Component
export default LayoutComponent;
