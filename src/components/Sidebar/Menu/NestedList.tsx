// Import Modules
import { useState } from 'react';
import Link from 'next/link';

// Import Material Modules
import Collapse from '@mui/material/Collapse';

// Import Material Icons
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Import Interfaces
import { PropsList } from '../interfaces/sidebar.interface';

// Import Styles
import { SidebarIcon, SidebarIconContainer, SidebarList, SidebarListButton, SidebarListText } from '@styles/components';

const NestedListComponent = (props: PropsList) => {
    // Desctructuring Props
    const { menu, currRoute } = props;

    // Define State Is Open Collapse
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Define Handle Is Open Collapse
    const handleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <SidebarList disablePadding>
                <SidebarListButton active={false} onClick={handleIsOpen}>
                    <SidebarIconContainer active={false}>
                        <SidebarIcon active={false}>{<menu.icon fontSize="small" />}</SidebarIcon>
                    </SidebarIconContainer>
                    <SidebarListText primary={menu.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </SidebarListButton>
            </SidebarList>
            {menu?.subMenu &&
                menu.subMenu.map((value) => (
                    <Collapse key={value.id} in={isOpen} timeout="auto" unmountOnExit>
                        <SidebarList disablePadding>
                            <Link href={value.path}>
                                <SidebarListButton active={value.path === currRoute} sub>
                                    <SidebarListText primary={value.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                                </SidebarListButton>
                            </Link>
                        </SidebarList>
                    </Collapse>
                ))}
        </>
    );
};

export default NestedListComponent;
