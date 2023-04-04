// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Import Components
import LayoutComponent from '@components/Layout/Layout';
import { models } from '@lib/databases/models';

// Define Setting Menu Page
const SettingMenuPage = (props: any) => {
    console.log(props);
    return (
        <>
            <Head>
                <title>Setting Menu - Redbox</title>
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
