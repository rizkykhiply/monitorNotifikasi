// Import Modules
import { useState } from 'react';
import Link from 'next/link';

// Import Material Modules
import Collapse from '@mui/material/Collapse';

// Import Material Icons
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Import Interfaces
import { PropsList } from '@interfaces/components';

// Import Styles
import { SidebarButton, SidebarIconBox, SidebarIconItem, SidebarList, SidebarTextItem } from '@styles/components';

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
                <SidebarButton active={false} onClick={handleIsOpen}>
                    <SidebarIconItem active={false}>
                        <SidebarIconBox active={false}>{<menu.icon fontSize="small" />}</SidebarIconBox>
                    </SidebarIconItem>
                    <SidebarTextItem primary={menu.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </SidebarButton>
            </SidebarList>
            {menu?.subMenu &&
                menu.subMenu.map((value) => (
                    <Collapse key={value.id} in={isOpen} timeout="auto" unmountOnExit>
                        <SidebarList disablePadding>
                            <Link href={value.path}>
                                <SidebarButton active={value.path === currRoute} sub={true}>
                                    <SidebarTextItem primary={value.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                                </SidebarButton>
                            </Link>
                        </SidebarList>
                    </Collapse>
                ))}
        </>
    );
};

export default NestedListComponent;
