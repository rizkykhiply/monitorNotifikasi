// Import Modules
import { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import Material Icons
import * as Icon from '@mui/icons-material';

// Import Assets
import Logo from '../../../public/logo.png';

// Import Hooks
import { useHooksMenu } from '@hooks/master';

// Import Components
import { NestedList, SingleList } from './Menu';

// Import Styles
import { SidebarHeader, SidebarListContainer } from '@styles/components';

// Define Sidebar Component
const SidebarComponent = () => {
    // Define Current Route
    const router = useRouter();
    const currentRoute = router.pathname;

    // Define Hooks Menu
    const { data } = useHooksMenu();

    // Define Mapping List Menu
    const listMenu = data?.map((value) => {
        const menu = value.menu;
        const subMenu = value.subMenu;

        return {
            id: menu.id,
            name: menu.name,
            icon: Icon[menu.icon],
            path: menu.path,
            subMenu: subMenu,
        };
    });

    return (
        <>
            <SidebarHeader>
                <Image src={Logo} alt="Logo Image" width={100} height={65} />
            </SidebarHeader>
            {listMenu?.map((menu) => (
                <SidebarListContainer key={menu.id}>
                    {menu.subMenu.length === 0 ? (
                        <SingleList menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    ) : (
                        <NestedList menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    )}
                </SidebarListContainer>
            ))}
        </>
    );
};

// Export Sidebar Component
export default memo(SidebarComponent);
