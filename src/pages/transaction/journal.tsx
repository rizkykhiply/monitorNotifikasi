// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Import Components
import LayoutComponent from '@components/Layout/Layout';

// Define Transaction Journal Page
const TransactionJournalPage = () => {
    return (
        <>
            <Head>
                <title>Transaction Journal - Dashboard Accounting</title>
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

// Define Transaction Journal Layout
TransactionJournalPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Transaction Journal Page
export default TransactionJournalPage;
