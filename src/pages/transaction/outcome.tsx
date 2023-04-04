// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Import Components
import LayoutComponent from '@components/Layout/Layout';

// Define Transaction Outcome Page
const TransactionOutcomePage = () => {
    return (
        <>
            <Head>
                <title>Transaction Outcome - Dashboard Accounting</title>
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

// Define Transaction Outcome Layout
TransactionOutcomePage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Transaction Outcome Page
export default TransactionOutcomePage;
