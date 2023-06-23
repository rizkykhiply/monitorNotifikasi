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

// Define Setting Page
const SettingPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Harmoni Web Accounting</title>
            </Head>
            <PageSection>
                <PageHeaderContainer>
                    <PageHeaderLeft>
                        <PageTitleText>Setting</PageTitleText>
                        <PageTitleSubText>List of all setting</PageTitleSubText>
                    </PageHeaderLeft>
                </PageHeaderContainer>
            </PageSection>
        </>
    );
};

// Define SSR Setting Page
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
