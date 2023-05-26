// Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

interface PropsContentContainerSidebar {
    width: number;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

export const ContentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
}));

export const ContentContainerSidebar = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['width'], props),
})<PropsContentContainerSidebar>(({ theme, width }) => ({
    [theme.breakpoints.up('sm')]: {
        width: width,
        flexShrink: 0,
    },
}));

export const ContentSidebarMobile = styled(Drawer, {
    shouldForwardProp: (props) => shouldForwardProp(['width'], props),
})<PropsContentContainerSidebar>(({ theme, width }) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: width,
    },
}));

export const ContentSidebar = styled(Drawer, {
    shouldForwardProp: (props) => shouldForwardProp(['width'], props),
})<PropsContentContainerSidebar>(({ theme, width }) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: width,
        background: '#FFF',
        border: 'none',
        boxShadow: '5px 0 15px rgba(0, 0, 0, 0.05)',
    },
}));

export const ContentMain = styled(Box, { shouldForwardProp: (props) => shouldForwardProp(['width'], props) })<PropsContentContainerSidebar>(
    ({ theme, width }) => ({
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${width}px)`,
        },
        flexGrow: 1,
        padding: '0 30px',
        minHeight: '100vh',
    }),
);
