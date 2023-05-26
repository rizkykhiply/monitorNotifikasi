// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Interfaces
import { PropsSettingMenu } from '@interfaces/pages';

// Import Hooks
import { useHooksMenu } from '@hooks/index';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { models } from '@lib/databases/models';

// Import Components
import LayoutComponent from '@components/Layout/Layout';

// Define Setting Menu Page
const SettingMenuPage = (props: PropsSettingMenu) => {
    // Destructuring Props
    const { fallback } = props;

    // Define Hooks Master Menu
    const getMasterMenu = useHooksMenu(fallback);

    return (
        <>
            <Head>
                <title>Setting Menu - Dashboard Template</title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const getRequest = context.req as NextApiRequest;
    const getSession = await getLoginSession(getRequest);

    if (!getSession) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const getListMenu = await models.menu.findAllMenu();

    return {
        props: {
            fallback: {
                '/api/master/list-menu': getListMenu,
            },
        },
    };
};

// Define SettingMenu Layout
SettingMenuPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export SettingMenu Page
export default SettingMenuPage;
