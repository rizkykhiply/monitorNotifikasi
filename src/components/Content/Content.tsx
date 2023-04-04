// Import Modules
import { memo, useState } from 'react';

// Import Material Modules
import Toolbar from '@mui/material/Toolbar';

// Import Interfaces
import { PropsContent } from '@interfaces/components';

// Import Libs
import { drawerWidth } from '@lib/constants';

// Import Components
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

// Import Styles
import { ContentContainer, ContentContainerSidebar, ContentMain, ContentSidebar, ContentSidebarMobile } from '@styles/components';

// Define Content Component
const ContentComponent = (props: PropsContent) => {
    // Destructuring Props
    const { window, children } = props;

    // Define Open Mobile State
    const [openMobile, setOpenMobile] = useState<boolean>(false);

    // Define Handle Click Toggle
    const handleClickDrawerToggle = () => {
        setOpenMobile(!openMobile);
    };

    return (
        <ContentContainer>
            <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleClickDrawerToggle} />
            <ContentContainerSidebar component="nav" width={drawerWidth}>
                <ContentSidebarMobile
                    container={window && window().document.body}
                    variant="temporary"
                    open={openMobile}
                    onClose={handleClickDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    width={drawerWidth}
                >
                    <Sidebar />
                </ContentSidebarMobile>
                <ContentSidebar variant="persistent" open anchor="left" width={drawerWidth}>
                    <Sidebar />
                </ContentSidebar>
            </ContentContainerSidebar>
            <ContentMain component="main" width={drawerWidth}>
                <Toolbar />
                {children}
            </ContentMain>
        </ContentContainer>
    );
};

// Export Content Component
export default memo(ContentComponent);
