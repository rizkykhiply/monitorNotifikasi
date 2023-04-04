// Import Modules
import { memo, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Import Material Modules
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';

// Import Material Icons
import MenuIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

// Import Interfaces
import { PropsNavbar, StateNavbar } from '@interfaces/components';

// Import Libs
import { Api } from '@lib/api';

// Import Styles
import {
    NavbarContainer,
    NavbarContent,
    NavbarContentButton,
    NavbarContentButtonText,
    NavbarContentProfile,
    NavbarContentText,
    NavbarIconButton,
    NavbarMenuHeaderWrapper,
    NavbarMenuIconButton,
    NavbarMenuIconWrapper,
    NavbarMenuTextBox,
    NavbarMenuTextRole,
    NavbarMenuTextName,
    NavbarMenuTextWrapper,
} from '@styles/components';

// Define Initial State Navbar Component
const initialState: StateNavbar = {
    name: '',
    role: '',
};

// Define Navbar Component
export const NavbarComponent = (props: PropsNavbar) => {
    // Destructuring Props
    const { drawerWidth, handleDrawerToggle } = props;

    // Define Navbar Component State
    const [states, setStates] = useState<StateNavbar>(initialState);

    // Define Anchor Element State
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    // Define Router
    const router = useRouter();

    // Define Fetch Session State
    const fetchSession = useCallback(async () => {
        const fetchingSession = await Api.get('/api/auth/session');
        const getSession = fetchingSession.data?.data;

        if (getSession) {
            setStates({
                name: getSession.name,
                role: getSession.role,
            });
        }
    }, []);

    // Define Navbar Lifecycle Component
    useEffect(() => {
        fetchSession();
    }, []);

    // Define Handle Click Menu
    const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    // Define Handle Click Close Menu
    const handleClickCloseMenu = () => {
        setAnchor(null);
    };

    // Define Handle Click logout
    const handleClickLogout = () => {
        router.push('/api/auth/logout');
    };

    return (
        <NavbarContainer position="fixed" width={drawerWidth}>
            <Toolbar>
                <NavbarIconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </NavbarIconButton>
                <NavbarContent>
                    <NavbarContentText noWrap>Dashboard Accounting</NavbarContentText>
                    <NavbarContentProfile>
                        <NavbarContentButton aria-controls="menu-appbar" aria-haspopup="true" onClick={handleClickMenu}>
                            <AccountCircleIcon />
                            <NavbarContentButtonText>{states?.name}</NavbarContentButtonText>
                        </NavbarContentButton>
                        <Menu
                            anchorEl={anchor}
                            open={Boolean(anchor)}
                            onClose={handleClickCloseMenu}
                            MenuListProps={{ sx: { padding: 0, width: '290px' } }}
                        >
                            <NavbarMenuHeaderWrapper>
                                <NavbarMenuTextWrapper>
                                    <AccountCircleIcon fontSize="large" />
                                    <NavbarMenuTextBox>
                                        <NavbarMenuTextName>{states?.name}</NavbarMenuTextName>
                                        <NavbarMenuTextRole>{states?.role}</NavbarMenuTextRole>
                                    </NavbarMenuTextBox>
                                </NavbarMenuTextWrapper>
                                <NavbarMenuIconWrapper title="Logout">
                                    <NavbarMenuIconButton onClick={handleClickLogout}>
                                        <LogoutIcon />
                                    </NavbarMenuIconButton>
                                </NavbarMenuIconWrapper>
                            </NavbarMenuHeaderWrapper>
                        </Menu>
                    </NavbarContentProfile>
                </NavbarContent>
            </Toolbar>
        </NavbarContainer>
    );
};

// Export Navbar Component
export default memo(NavbarComponent);
