// Import Modules
import { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import Material Icons
import * as Icon from '@mui/icons-material';

// Import Hooks
import { useHooksMenu } from '@hooks/index';

// Import Assets
import Logo from '../../../public/example-logo.png';

// Import Components
import { NestedList, SingleList } from './Menu';

// Import Styles
import { SidebarHeader, SidebarHeaderText, SidebarListBox } from '@styles/components';

// Define Sidebar Component
const SidebarComponent = () => {
    // Define Current Route
    const router = useRouter();
    const currentRoute = router.pathname;

    // Define Hooks Menu
    const getMasterMenu = useHooksMenu();

    // Define Mapping List Menu
    const listMenu = getMasterMenu?.map((value) => {
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
                <Image src={Logo} alt="Logo Image" width={45} height={40} />
                <SidebarHeaderText>Dashboard Admin Template</SidebarHeaderText>
            </SidebarHeader>
            {listMenu?.map((menu) => (
                <SidebarListBox key={menu.id}>
                    {menu.subMenu.length === 0 ? (
                        <SingleList menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    ) : (
                        <NestedList menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    )}
                </SidebarListBox>
            ))}
        </>
    );
};

// Export Sidebar Component
export default memo(SidebarComponent);
