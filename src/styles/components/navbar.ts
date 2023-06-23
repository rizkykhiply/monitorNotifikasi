// Import Modules
import Link from 'next/link';

// Import Material Modules
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';

interface PropsNavbarContainer {
    width: number;
}

interface PropsNavbarContentContainer {
    trigger: boolean;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

export const NavbarContainer = styled(AppBar, {
    shouldForwardProp: (props) => shouldForwardProp(['width'], props),
})<PropsNavbarContainer>(({ theme, width }) => ({
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${width}px)`,
        marginLeft: `${width}px`,
    },
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    boxShadow: 'none',
}));

export const NavbarToolbar = styled(Toolbar)(({ theme }) => ({
    margin: '0 30px',
}));

export const NavbarIconContainer = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'none',
        marginRight: '20px',
    },
    color: 'inherit',
}));

export const NavbarContentContainer = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['trigger'], props),
})<PropsNavbarContentContainer>(({ theme, trigger }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',
    width: '100%',
    background: trigger ? '#FFF' : 'none',
    borderRadius: '10px',
    boxShadow: trigger ? 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px' : 'none',
    top: trigger ? '20px' : 'none',
    padding: trigger ? '10px' : '20px 10px',
    transition: 'background 0.2s ease',
}));

export const NavbarContentBreadcumbsContainer = styled(Breadcrumbs)(({ theme }) => ({
    fontSize: '12px',
}));

export const NavbarContentBreadcumbsLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    fontSize: theme.typography.subtitle2.fontSize,
}));

export const NavbarContentBreadcumbsText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle2.fontSize,
    color: theme.palette.text.primary,
}));

export const NavbarContentProfileContainer = styled(Box)(({ theme }) => ({
    width: 'auto',
}));

export const NavbarContentProfileButton = styled(IconButton)(({ theme }) => ({
    color: 'inherit',
    borderRadius: '10px',
    '&:hover': {
        background: '#00000014',
    },
}));

export const NavbarMenuContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: '#FFF',
    padding: '15px',
}));

export const NavbarMenuContentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const NavbarMenuTextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const NavbarMenuText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle2.fontSize,
}));

export const NavbarMenuSubText = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    color: theme.palette.text.secondary,
}));

export const NavbarMenuTooltipContainer = styled(Tooltip)(({ theme }) => ({}));

export const NavbarMenuIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    '&:hover': {
        background: '#00000014',
    },
}));
