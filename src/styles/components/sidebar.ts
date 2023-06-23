// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface PropsActive {
    active: boolean;
    sub?: boolean;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

export const SidebarHeader = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padding: '20px 0 ',
}));

export const SidebarListContainer = styled(Box)(({ theme }) => ({
    marginTop: '5px',
}));

export const SidebarList = styled(ListItem)(({ theme }) => ({
    display: 'block',
    padding: '0 20px',
}));

export const SidebarListText = styled(ListItemText)(({ theme }) => ({
    display: 'block',
    color: 'inherit',
}));

export const SidebarListButton = styled(ListItemButton, {
    shouldForwardProp: (props) => shouldForwardProp(['active', 'sub'], props),
})<PropsActive>(({ theme, active, sub }) => ({
    color: theme.palette.text.primary,
    paddingLeft: '25px',
    borderRadius: '10px',
    boxShadow: active && !sub ? '0 20px 30px 0 #0003' : 'none',
    ':hover': {
        background: active && !sub ? '#FFF' : '#00000014',
    },
    '::before': sub
        ? {
              content: '""',
              display: 'block',
              height: active ? '9px' : '6px',
              width: active ? '9px' : '6px',
              borderRadius: '50%',
              background: active ? theme.palette.background.default : theme.palette.text.secondary,
              marginRight: active ? '34px' : '37px',
              marginLeft: '12px',
          }
        : 'none',
}));

export const SidebarIconContainer = styled(ListItemIcon, {
    shouldForwardProp: (props) => shouldForwardProp(['active'], props),
})<PropsActive>(({ theme, active }) => ({
    color: active ? '#FFF' : 'inherit',
}));

export const SidebarIcon = styled(Box, { shouldForwardProp: (props) => shouldForwardProp(['active'], props) })<PropsActive>(
    ({ theme, active }) => ({
        background: active ? theme.palette.background.default : theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: '0 5px 15px #0003',
        padding: '6px 6px 0 6px',
    }),
);
