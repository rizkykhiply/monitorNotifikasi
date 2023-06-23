// Import Modules
import Link from 'next/link';

// Import Interfaces
import { PropsList } from '../interfaces/sidebar.interface';

// Import Styles
import { SidebarIcon, SidebarIconContainer, SidebarList, SidebarListButton, SidebarListText } from '@styles/components';

const SingleListComponent = (props: PropsList) => {
    // Destructuring Props
    const { menu, currRoute } = props;

    return (
        <>
            <SidebarList disablePadding>
                <Link href={menu.path}>
                    <SidebarListButton active={menu.path === currRoute}>
                        <SidebarIconContainer active={menu.path === currRoute}>
                            <SidebarIcon active={menu.path === currRoute}>{<menu.icon fontSize="small" />}</SidebarIcon>
                        </SidebarIconContainer>
                        <SidebarListText primary={menu.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                    </SidebarListButton>
                </Link>
            </SidebarList>
        </>
    );
};

export default SingleListComponent;
