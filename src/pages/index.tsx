// Import Modules
import { GetServerSideProps, NextApiRequest } from 'next';
import Head from 'next/head';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';

// Define Home Page
const HomePage = () => {
    return (
        <>
            <Head>
                <title>Dashboard Accounting</title>
                <meta name="description" content="Dashboard Accounting" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to Dashboard Accounting</h1>
            </main>
        </>
    );
};

// Define SSR Home Page
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const getSession = await getLoginSession(ctx.req as NextApiRequest);

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

// Export Home Page
export default HomePage;
