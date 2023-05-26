// Import Modules
import { memo, MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Import Material Modules
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Import Material Icons
import MenuIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

// Import Interfaces
import { PropsNavbar, StateNavbar } from '@interfaces/components';

// Import Libs
import { validateUpperCase } from '@lib/utils/helper';

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
    NavbarContentBreadcumbs,
    NavbarContentLink,
} from '@styles/components';

// Define Initial State Navbar Component
const initialState: StateNavbar = {
    name: '',
    role: '',
};

// Define Navbar Component
export const NavbarComponent = (props: PropsNavbar) => {
    // Destructuring Props
    const { window, drawerWidth, handleDrawerToggle } = props;

    // Define Navbar Component State
    const [state, setStates] = useState<StateNavbar>(initialState);

    // Define Open Menu State
    const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);

    // Define Router
    const router = useRouter();

    // Define Breadcumbs
    const getPath = router.asPath;
    const getNav = getPath.split('/').filter((data) => data !== '');

    // Define Trigger Scroll
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 10,
        target: window ? window() : undefined,
    });

    // Define Fetch Session State
    const fetchSession = async () => {
        const fetchingSession = await fetch('/api/auth/session', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
        const getFetching = await fetchingSession.json();
        const getSession = getFetching?.data;

        if (getSession) {
            setStates({
                name: getSession.name,
                role: getSession.role,
            });
        }
    };

    // Define Navbar Lifecycle Component
    useEffect(() => {
        fetchSession();
    }, []);

    // Define Handle Click Menu
    const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
        setOpenMenu(event.currentTarget);
    };

    // Define Handle Click Close Menu
    const handleClickCloseMenu = () => {
        setOpenMenu(null);
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
                <NavbarContent trigger={trigger}>
                    <NavbarContentBreadcumbs aria-label="breadcrumb">
                        <NavbarContentLink href="/dashboard">
                            <HomeIcon fontSize="small" />
                        </NavbarContentLink>
                        {getNav.map((data, index) => (
                            <NavbarContentText key={index}>{validateUpperCase(data)}</NavbarContentText>
                        ))}
                    </NavbarContentBreadcumbs>
                    <NavbarContentProfile>
                        <NavbarContentButton aria-controls="menu-appbar" aria-haspopup="true" disableRipple onClick={handleClickMenu}>
                            <AccountCircleIcon />
                            <NavbarContentButtonText>{state?.name}</NavbarContentButtonText>
                        </NavbarContentButton>
                        <Menu
                            anchorEl={openMenu}
                            open={Boolean(openMenu)}
                            onClose={handleClickCloseMenu}
                            disableScrollLock={true}
                            PaperProps={{ sx: { borderRadius: '10px', boxShadow: '0 5px 15px 0 #0003' } }}
                            MenuListProps={{ disablePadding: true, sx: { width: '240px' } }}
                            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                        >
                            <NavbarMenuHeaderWrapper>
                                <NavbarMenuTextWrapper>
                                    <NavbarMenuTextBox>
                                        <NavbarMenuTextName>{state?.name}</NavbarMenuTextName>
                                        <NavbarMenuTextRole>{state?.role}</NavbarMenuTextRole>
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
