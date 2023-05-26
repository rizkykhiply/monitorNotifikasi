// Import Modules
import Link from 'next/link';

// Import Interfaces
import { PropsList } from '@interfaces/components';

// Import Styles
import { SidebarButton, SidebarIconBox, SidebarIconItem, SidebarList, SidebarTextItem } from '@styles/components';

const SingleListComponent = (props: PropsList) => {
    // Destructuring Props
    const { menu, currRoute } = props;

    return (
        <>
            <SidebarList disablePadding>
                <Link href={menu.path}>
                    <SidebarButton active={menu.path === currRoute}>
                        <SidebarIconItem active={menu.path === currRoute}>
                            <SidebarIconBox active={menu.path === currRoute}>{<menu.icon fontSize="small" />}</SidebarIconBox>
                        </SidebarIconItem>
                        <SidebarTextItem primary={menu.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                    </SidebarButton>
                </Link>
            </SidebarList>
        </>
    );
};

export default SingleListComponent;
