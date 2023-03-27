// Modules
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export const SidebarHeader = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padding: '20px 0 ',
}));

export const SidebarHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '0.875rem',
    marginLeft: '10px',
}));

export const SidebarList = styled(ListItem)(({ theme }) => ({
    display: 'block',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: '10px',
    paddingLeft: '25px',
}));

export const SidebarButton = styled(ListItemButton)(({ theme }) => ({
    color: 'inherit',
    transition: 'backgroundColor ease 0.3s',
}));

export const SidebarButtonActive = styled(ListItemButton)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ed213a',
    transition: 'backgroundColor 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#ed213a',
    },
}));

export const SidebarIconItem = styled(ListItemIcon)(({ theme }) => ({
    color: 'inherit',
}));

export const SidebarTextItem = styled(ListItemText)(({ theme }) => ({
    display: 'block',
    color: 'inherit',
    marginLeft: '-15px',
}));
