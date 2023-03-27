// Import Modules
import Head from 'next/head';
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';

// Import Libs
import { getLoginSession } from '@/lib/auth/auth';

// Import Components
import LayoutComponent from '@/components/Layout/Layout';

// Define Setting Page
const SettingPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Redbox</title>
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

// Define Setting Layout
SettingPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Setting Page
export default SettingPage;