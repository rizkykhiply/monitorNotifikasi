// Import Modules
import { memo, MouseEvent, useState } from 'react';
import Router from 'next/router';

// Import Material Modules
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';

// Import Interfaces
import { PropsNavbar } from '@/interfaces/components';

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
} from '@/styles/components';

// Define Navbar Component
export const NavbarComponent = (props: PropsNavbar) => {
    // Destructuring Props
    const { drawerWidth, fullname, role, handleDrawerToggle } = props;

    // Define Anchor Element State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Define Handle Click Menu
    const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Define Handle Click Close Menu
    const handleClickCloseMenu = () => {
        setAnchorEl(null);
    };

    // Define Handle Click logout
    const handleClickLogout = () => {
        Router.push('api/auth/logout');
    };

    return (
        <NavbarContainer position="fixed" width={drawerWidth}>
            <Toolbar>
                <NavbarIconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </NavbarIconButton>
                <NavbarContent>
                    <NavbarContentText noWrap>Web Accounting</NavbarContentText>
                    <NavbarContentProfile>
                        <NavbarContentButton aria-controls="menu-appbar" aria-haspopup="true" onClick={handleClickMenu}>
                            <AccountCircle />
                            <NavbarContentButtonText>{fullname ?? ''}</NavbarContentButtonText>
                        </NavbarContentButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClickCloseMenu}
                            MenuListProps={{ sx: { padding: 0, width: '290px' } }}
                        >
                            <NavbarMenuHeaderWrapper>
                                <NavbarMenuTextWrapper>
                                    <AccountCircle fontSize="large" />
                                    <NavbarMenuTextBox>
                                        <NavbarMenuTextName>{fullname ?? ''}</NavbarMenuTextName>
                                        <NavbarMenuTextRole>{role ?? ''}</NavbarMenuTextRole>
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
