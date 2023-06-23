// Import Modules
import { memo, MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';

// Import Material Modules
import Menu from '@mui/material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Import Material Icons
import MenuIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

// Import Libs
import { validateUpperCase } from '@lib/utils/helper';

// Import Styles
import {
    NavbarContainer,
    NavbarIconContainer,
    NavbarContentContainer,
    NavbarContentBreadcumbsContainer,
    NavbarContentBreadcumbsLink,
    NavbarContentBreadcumbsText,
    NavbarContentProfileContainer,
    NavbarContentProfileButton,
    NavbarMenuContainer,
    NavbarMenuContentContainer,
    NavbarMenuTextContainer,
    NavbarMenuText,
    NavbarMenuSubText,
    NavbarMenuTooltipContainer,
    NavbarMenuIconButton,
    NavbarToolbar,
} from '@styles/components';

// Define Props Navbar
export interface PropsNavbar {
    window?: () => Window;
    drawerWidth: number;
    handleDrawerToggle(): void;
    session: {
        name: string;
        role: string;
    };
}

// Define Navbar Component
export const NavbarComponent = (props: PropsNavbar) => {
    // Destructuring Props
    const { window, drawerWidth, handleDrawerToggle, session } = props;

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
            <NavbarToolbar>
                <NavbarIconContainer aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </NavbarIconContainer>
                <NavbarContentContainer trigger={trigger}>
                    <NavbarContentBreadcumbsContainer aria-label="breadcrumb">
                        <NavbarContentBreadcumbsLink href="/dashboard">
                            <HomeIcon fontSize="small" />
                        </NavbarContentBreadcumbsLink>
                        {getNav.map((data, index) => (
                            <div key={index}>
                                {index === 1 ? (
                                    <NavbarContentBreadcumbsLink href={`/${getNav[0]}/${data}`}>
                                        <NavbarContentBreadcumbsText>{validateUpperCase(data)}</NavbarContentBreadcumbsText>
                                    </NavbarContentBreadcumbsLink>
                                ) : (
                                    <NavbarContentBreadcumbsText>{validateUpperCase(data)}</NavbarContentBreadcumbsText>
                                )}
                            </div>
                        ))}
                    </NavbarContentBreadcumbsContainer>
                    <NavbarContentProfileContainer>
                        <NavbarContentProfileButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            disableRipple
                            onClick={handleClickMenu}
                        >
                            <AccountCircleIcon />
                        </NavbarContentProfileButton>
                        <Menu
                            anchorEl={openMenu}
                            open={Boolean(openMenu)}
                            onClose={handleClickCloseMenu}
                            disableScrollLock={true}
                            PaperProps={{ sx: { borderRadius: '5px', boxShadow: '0 5px 15px 0 #0003', marginLeft: '-55px' } }}
                            MenuListProps={{ disablePadding: true, sx: { width: '240px' } }}
                        >
                            <NavbarMenuContainer>
                                <NavbarMenuContentContainer>
                                    <NavbarMenuTextContainer>
                                        <NavbarMenuText>{session?.name}</NavbarMenuText>
                                        <NavbarMenuSubText>{session?.role}</NavbarMenuSubText>
                                    </NavbarMenuTextContainer>
                                </NavbarMenuContentContainer>
                                <NavbarMenuTooltipContainer title="Logout">
                                    <NavbarMenuIconButton onClick={handleClickLogout}>
                                        <LogoutIcon />
                                    </NavbarMenuIconButton>
                                </NavbarMenuTooltipContainer>
                            </NavbarMenuContainer>
                        </Menu>
                    </NavbarContentProfileContainer>
                </NavbarContentContainer>
            </NavbarToolbar>
        </NavbarContainer>
    );
};

// Export Navbar Component
export default memo(NavbarComponent);
