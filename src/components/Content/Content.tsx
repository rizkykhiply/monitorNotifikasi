// Import Modules
import { memo, useCallback, useEffect, useReducer, useState } from 'react';
import useSWR from 'swr';

// Import Material Modules
import Toolbar from '@mui/material/Toolbar';
import * as Icon from '@mui/icons-material';

// Import Components
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

// Import Libs
import { drawerWidth } from '@/lib/constants';

// Import Interfaces
import { PropsContent, StateContent } from '@/interfaces/components';

// Import Styles
import { ContentContainer, ContentContainerSidebar, ContentMain, ContentSidebar, ContentSidebarMobile } from '@/styles/components';

// Define Initial State Component
const initialState = {
    menu: [],
    user: {
        name: '',
        role: '',
    },
};

// Define Content Component
const ContentComponent = (props: PropsContent) => {
    // Destructuring Props
    const { window, children } = props;

    // Define Content Component State
    const [state, setState] = useReducer(
        (state: StateContent, newState: Partial<StateContent>) => ({ ...state, ...newState }),
        initialState,
    );

    // Define Open Mobile State
    const [openMobile, setOpenMobile] = useState(false);

    // Define Url Api
    const apiUrlDataMenu = '/api/master/list-menu';
    const apiUrlDataUser = '/api/user/list';

    // Define Hooks Fetch Menu Api
    const { data: getListMenu } = useSWR(apiUrlDataMenu);
    // const { data: dataUser } = useSWR(apiUrlDataUser);

    // Define Fetch Menu State
    const fetchMenu = useCallback(() => {
        if (getListMenu) {
            setState({
                menu: getListMenu.data,
                user: {
                    name: 'Rendy Ferdiansyah',
                    role: 'Administrator',
                },
            });
        }
    }, [getListMenu]);

    // Define Content Lifecycle Component
    useEffect(() => {
        fetchMenu();
    }, [fetchMenu]);

    // Define Handle Click Toggle
    const handleClickDrawerToggle = () => {
        setOpenMobile(!openMobile);
    };

    // Mapping List Menu
    const listMenu = state.menu.map((v) => {
        return {
            name: v.name,
            icon: Icon[v.icon],
            path: v.path,
        };
    });

    return (
        <ContentContainer>
            <Navbar
                drawerWidth={drawerWidth}
                fullname={state.user.name}
                role={state.user.role}
                handleDrawerToggle={handleClickDrawerToggle}
            />
            <ContentContainerSidebar component="nav" width={drawerWidth}>
                <ContentSidebarMobile
                    container={window && window().document.body}
                    variant="temporary"
                    open={openMobile}
                    onClose={handleClickDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    width={drawerWidth}
                >
                    <Sidebar menu={listMenu} />
                </ContentSidebarMobile>
                <ContentSidebar variant="persistent" open anchor="left" width={drawerWidth}>
                    <Sidebar menu={listMenu} />
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
