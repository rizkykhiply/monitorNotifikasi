// Import Modules
import { memo, ReactElement, useContext, useEffect, useState } from 'react';

// Import Material Modules
import Toolbar from '@mui/material/Toolbar';

// Import Hooks
import { useHooksSession } from '@hooks/session';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Libs
import { drawerWidth } from '@lib/constants';

// Import Components
import SidebarComponent from '@components/Sidebar/Sidebar';
import NavbarComponent from '@components/Navbar/Navbar';
import DialogSessionComponent from '@components/Dialog/DialogSession';

// Import Styles
import { ContentContainer, ContentMain, ContentSidebar, ContentSidebarContainer, ContentSidebarMobile } from '@styles/components';

// Define Props Content
interface PropsContent {
    window?: () => Window;
    children: ReactElement;
}

// Define Content Component
const ContentComponent = (props: PropsContent) => {
    // Destructuring Props
    const { window, children } = props;

    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Open Mobile State
    const [openMobile, setOpenMobile] = useState<boolean>(false);

    // Define Hooks Session
    const { data, isLoading } = useHooksSession();

    // Define Handle Session Expired
    useEffect(() => {
        if (data?.expired && !isLoading) {
            actions.UPDATE_MODAL({
                ...states.modal,
                session: {
                    show: true,
                },
            });
        } else {
            actions.UPDATE_MODAL({
                ...states.modal,
                session: {
                    show: false,
                },
            });
        }
    }, [data?.expired, isLoading]);

    // Define Handle Click Toggle
    const handleClickDrawerToggle = () => {
        setOpenMobile(!openMobile);
    };

    return (
        <ContentContainer>
            <NavbarComponent window={window} drawerWidth={drawerWidth} handleDrawerToggle={handleClickDrawerToggle} session={data} />
            <ContentSidebarContainer component="nav" width={drawerWidth}>
                <ContentSidebarMobile
                    container={window && window().document.body}
                    variant="temporary"
                    open={openMobile}
                    onClose={handleClickDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    width={drawerWidth}
                >
                    <SidebarComponent />
                </ContentSidebarMobile>
                <ContentSidebar variant="persistent" open anchor="left" width={drawerWidth}>
                    <SidebarComponent />
                </ContentSidebar>
            </ContentSidebarContainer>
            <ContentMain component="main" width={drawerWidth}>
                <Toolbar />
                <DialogSessionComponent />
                {children}
            </ContentMain>
        </ContentContainer>
    );
};

// Export Content Component
export default memo(ContentComponent);
