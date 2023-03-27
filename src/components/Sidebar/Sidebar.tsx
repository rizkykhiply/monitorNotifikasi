// Import Modules
import { memo } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Import Assets
import Logo from '../../../public/redbox-logo.png';

// Import Interfaces
import { PropsSidebar } from '@/interfaces/components';

// Import Styles
import {
    SidebarButton,
    SidebarButtonActive,
    SidebarHeader,
    SidebarHeaderText,
    SidebarIconItem,
    SidebarList,
    SidebarTextItem,
} from '@/styles/components';

// Define Sidebar Component
const SidebarComponent = (props: PropsSidebar) => {
    // Destructuring Props
    const { menu } = props;

    return (
        <>
            <SidebarHeader>
                <Image src={Logo} alt="Logo" width={45} height={40} />
                <SidebarHeaderText>Digital Sales and Consumer Promotions</SidebarHeaderText>
            </SidebarHeader>
            {menu.map((v, i) => (
                <SidebarList key={i} disablePadding>
                    <Link href={v?.path}>
                        {v.path === Router.asPath ? (
                            <SidebarButtonActive>
                                <SidebarIconItem>{<v.icon />}</SidebarIconItem>
                                <SidebarTextItem primary={v?.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                            </SidebarButtonActive>
                        ) : (
                            <SidebarButton>
                                <SidebarIconItem>{<v.icon />}</SidebarIconItem>
                                <SidebarTextItem primary={v?.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                            </SidebarButton>
                        )}
                    </Link>
                </SidebarList>
            ))}
        </>
    );
};

// Export Sidebar Component
export default memo(SidebarComponent);
