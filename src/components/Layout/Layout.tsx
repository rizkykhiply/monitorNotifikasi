// Import Interfaces
import { PropsLayout } from '@interfaces/components';

// Import Components
import Content from '../Content/Content';

// Define Layout Component
const LayoutComponent = ({ children }: PropsLayout) => {
    return <Content>{children}</Content>;
};

// Export Layout Component
export default LayoutComponent;
