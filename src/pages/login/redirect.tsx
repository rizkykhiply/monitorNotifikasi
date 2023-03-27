// Import Modules
import { GetServerSideProps, NextApiRequest } from 'next';

// Import Libs
import { getLoginSession } from '@/lib/auth/auth';

// Define Redirect Page
const RedirectPage = () => {
    return <></>;
};

// Define Redirect Server Side
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
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
    };
};

// Export Redirect Page
export default RedirectPage;
