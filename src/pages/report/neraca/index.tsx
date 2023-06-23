// Import Modules
import { ReactElement } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import dayjs from 'dayjs';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { validateCurrency, validateTime } from '@lib/utils/helper';

// Import Components
const DateComponent = dynamic(() => import('@components/Form/Custom/Date'), { ssr: false });
import LayoutComponent from '@components/Layout/Layout';

// Import Styles
import {
    ButtonPrimary,
    ButtonSecondary,
    CustomFormBox,
    CustomFormControl,
    CustomFormInput,
    PageHeaderContainer,
    PageHeaderLeft,
    PageSection,
    PageTitleSubText,
    PageTitleText,
} from '@styles/components';
import {
    NeracaContent,
    NeracaHeader,
    NeracaHeaderBox,
    NeracaHeaderContainer,
    NeracaListContainer,
    NeracaReportContainer,
    NeracaTitle,
    NeracaTitleContainer,
    NeracaTitleSub,
} from '@styles/pages';

// Define Neraca Page
const NeracaPage = () => {
    // Define Handle Change Date
    const handleChangeDate = (value: dayjs.Dayjs, name: string) => {
        console.log(value);
    };

    return (
        <>
            <Head>
                <title>Neraca - Harmoni Web Accounting</title>
            </Head>
            <PageSection>
                <PageHeaderContainer>
                    <PageHeaderLeft>
                        <PageTitleText>Report</PageTitleText>
                        <PageTitleSubText>List of neraca</PageTitleSubText>
                    </PageHeaderLeft>
                </PageHeaderContainer>
                <NeracaContent>
                    <NeracaHeaderContainer>
                        <NeracaHeader>
                            <NeracaHeaderBox>
                                <CustomFormBox display="flex">
                                    <CustomFormInput spacer maxWidth="175px">
                                        <CustomFormControl fullWidth variant="standard">
                                            <DateComponent
                                                size="small"
                                                label="Periode"
                                                name="periode"
                                                onChange={(newValue) => handleChangeDate(newValue as dayjs.Dayjs, 'periode')}
                                                defaultValue={dayjs(validateTime(new Date(), 'date'))}
                                                format="YYYY-MM"
                                                views={['year', 'month']}
                                            />
                                        </CustomFormControl>
                                    </CustomFormInput>
                                    <ButtonPrimary variant="contained" sx={{ width: '100px' }}>
                                        Find
                                    </ButtonPrimary>
                                </CustomFormBox>
                            </NeracaHeaderBox>
                            <ButtonSecondary variant="outlined" sx={{ width: '125px' }}>
                                Export
                            </ButtonSecondary>
                        </NeracaHeader>
                    </NeracaHeaderContainer>
                    <NeracaReportContainer>
                        <NeracaTitleContainer>
                            <NeracaTitle>Neraca</NeracaTitle>
                            <NeracaTitleSub>Periode {validateTime(new Date(), 'date-time-4')}</NeracaTitleSub>
                        </NeracaTitleContainer>
                        <NeracaListContainer></NeracaListContainer>
                    </NeracaReportContainer>
                </NeracaContent>
            </PageSection>
        </>
    );
};

// Define SSR Neraca Page
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

// Define Neraca Layout
NeracaPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Neraca Page
export default NeracaPage;
