// Modules
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

interface PropsNavbarContainer {
    width: number;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

export const NavbarContainer = styled(AppBar, { shouldForwardProp: (props) => shouldForwardProp(['width'], props) })<PropsNavbarContainer>(
    ({ theme, width }) => ({
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${width}px)`,
            marginLeft: `${width}px`,
        },
        color: theme.palette.text.primary,
        background: theme.palette.background.paper,
        boxShadow: 'none',
        borderBottom: '1px solid #0000001F',
    }),
);

export const NavbarIconButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'none',
        marginRight: '20px',
    },
    color: 'inherit',
}));

export const NavbarContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',
    width: '100%',
}));

export const NavbarContentText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle2.fontSize,
}));

export const NavbarContentProfile = styled(Box)(({ theme }) => ({
    width: 'auto',
}));

export const NavbarContentButton = styled(IconButton)(({ theme }) => ({
    color: 'inherit',
    borderRadius: '10px',
    '&:hover': {
        background: '#00000014',
    },
}));

export const NavbarContentButtonText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle2.fontSize,
    marginLeft: '10px',
}));

export const NavbarMenuHeaderWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '15px',
}));

export const NavbarMenuTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const NavbarMenuTextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',

    marginLeft: '8px',
}));

export const NavbarMenuTextName = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle2.fontSize,
}));

export const NavbarMenuTextRole = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    color: theme.palette.text.secondary,
}));

export const NavbarMenuIconWrapper = styled(Tooltip)(({ theme }) => ({}));

export const NavbarMenuIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    transition: 'all 0.25s',
    '&:hover': {
        color: '#FFF',
        background: theme.palette.primary.main,
    },
}));
