// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Import Components
import LayoutComponent from '@components/Layout/Layout';

// Import Styles
import { PageHeaderContainer, PageHeaderLeft, PageSection, PageTitleSubText, PageTitleText } from '@styles/components';

// Define Dashboard Page
const DashboardPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Harmoni Web Accounting</title>
            </Head>
            <PageSection>
                <PageHeaderContainer>
                    <PageHeaderLeft>
                        <PageTitleText>Dashboard</PageTitleText>
                        <PageTitleSubText>List of chart report</PageTitleSubText>
                    </PageHeaderLeft>
                </PageHeaderContainer>
            </PageSection>
        </>
    );
};

// Define SSR Dashboard Page
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
