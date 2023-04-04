// Import Modules
import { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import Material Modules
import Box from '@mui/material/Box';

// Import Material Icons
import * as Icon from '@mui/icons-material';

// Import Hooks
import { useHooksMasterMenu } from '@hooks/index';

// Import Assets
import Logo from '../../../public/logo.png';

// Import Components
import SingleListComponent from './Menu/SingleList';
import NestedListComponent from './Menu/NestedList';

// Import Styles
import { SidebarHeader, SidebarHeaderText } from '@styles/components';

// Define Sidebar Component
const SidebarComponent = () => {
    // Define Current Route
    const router = useRouter();
    const currentRoute = router.pathname;

    // Define Hooks Master Menu
    const getMasterMenu = useHooksMasterMenu();

    // Mapping List Menu
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
                <SidebarHeaderText>Digital Sales and Consumer Promotions</SidebarHeaderText>
            </SidebarHeader>
            {listMenu?.map((menu) => (
                <Box key={menu.id}>
                    {menu.subMenu.length === 0 ? (
                        <SingleListComponent menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    ) : (
                        <NestedListComponent menu={{ ...menu, subMenu: menu.subMenu }} currRoute={currentRoute} />
                    )}
                </Box>
            ))}
        </>
    );
};

// Export Sidebar Component
export default memo(SidebarComponent);
