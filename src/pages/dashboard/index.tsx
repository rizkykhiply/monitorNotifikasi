// Import Modules
import Head from 'next/head';
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';

// Import Libs
import { getLoginSession } from '@/lib/auth/auth';

// Import Components
import LayoutComponent from '@/components/Layout/Layout';

// Define Dashboard Page
const DashboardPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Redbox</title>
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

// Define Dashboard Layout
DashboardPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Dashboard Page
export default DashboardPage;