// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Import Components
import LayoutComponent from '@components/Layout/Layout';

// Define Setting User Page
const SettingUserPage = () => {
    return (
        <>
            <Head>
                <title>Setting User - Redbox</title>
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

    return {
        props: {},
    };
};

// Define SettingUser Layout
SettingUserPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export SettingUser Page
export default SettingUserPage;
