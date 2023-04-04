// Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

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

export const SidebarHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '0.87rem',
    marginLeft: '10px',
}));

export const SidebarList = styled(ListItem)(({ theme }) => ({
    display: 'block',
    color: theme.palette.text.secondary,
    marginBottom: '3px',
    padding: '0 20px',
}));

export const SidebarButton = styled(ListItemButton, {
    shouldForwardProp: (props) => shouldForwardProp(['active', 'sub'], props),
})<PropsActive>(({ theme, active, sub }) => ({
    color: theme.palette.text.primary,
    background: active && !sub ? `#FFF` : 'none',
    paddingLeft: '25px',
    borderRadius: '5px',
    boxShadow: active && !sub ? '0 20px 30px 0 #0003' : 'none',
    ':hover': {
        background: active && !sub ? '#FFF' : '#00000014',
    },
    '::before': sub
        ? {
              content: '""',
              display: 'block',
              height: '2px',
              width: '10px',
              background: active ? theme.palette.primary.main : theme.palette.text.primary,
              marginRight: '20px',
              marginLeft: '9px',
          }
        : 'none',
}));

export const SidebarIconBox = styled(Box, { shouldForwardProp: (props) => shouldForwardProp(['active'], props) })<PropsActive>(
    ({ theme, active }) => ({
        background: active ? theme.palette.background.default : '#FFF',
        borderRadius: '5px',
        boxShadow: '0 5px 15px #0003',
        padding: '6px 6px 0 6px',
    }),
);

export const SidebarIconItem = styled(ListItemIcon, {
    shouldForwardProp: (props) => shouldForwardProp(['active'], props),
})<PropsActive>(({ theme, active }) => ({
    color: active ? '#FFF' : 'inherit',
}));

export const SidebarTextItem = styled(ListItemText)(({ theme }) => ({
    display: 'block',
    color: 'inherit',
    marginLeft: '-10px',
}));
