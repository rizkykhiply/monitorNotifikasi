// Import Modules
import { ChangeEvent, ReactElement, useContext, useEffect, useMemo } from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Router from 'next/router';
import debounce from 'lodash.debounce';
import dayjs from 'dayjs';

// Import Material Icons
import AddOutlined from '@mui/icons-material/AddOutlined';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Hooks
import { useHooksJournal } from '@hooks/journal';

// Import Libs
import { models } from '@lib/databases/models';
import { getLoginSession } from '@lib/auth/auth';
import { validatePagination, validateTime } from '@lib/utils/helper';
import { IPagination } from '@lib/utils/interfaces/helper.interface';
import { TrxJurnalHeader } from '@lib/databases/entities/trx-jurnal-header.entity';

// Import Components
const DialogDeleteComponent = dynamic(() => import('@components/Dialog/DialogDelete'), { ssr: false });
const JournalTableComponent = dynamic(() => import('@pagesComponents/Journal/JournalTable'));
import LayoutComponent from '@components/Layout/Layout';

// Import Styles
import {
    ButtonPrimary,
    ButtonSecondary,
    PageHeaderContainer,
    PageHeaderLeft,
    PageHeaderRight,
    PageSection,
    PageTitleSubText,
    PageTitleText,
} from '@styles/components';

// Define Props Journal Entries
interface PropsJournalEntries {
    fallback: TrxJurnalHeader[];
    pagination: IPagination;
}

// Define Journal Entries Page
const JournalEntriesPage = (props: PropsJournalEntries) => {
    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Hooks Journal
    const { data, isLoading } = useHooksJournal({
        fallback: props.fallback,
        currentPage: states.pagination.currentPage,
        limit: states.pagination.limit,
        sort: states.pagination.sort,
        search: states?.pagination?.search,
        startDate: states?.pagination?.startDate,
        endDate: states?.pagination?.endDate,
    });

    // Define Handle Create Journal
    const handleCreateJournal = () => {
        Router.push('/transaction/journal/create');
    };

    // Define Handle Change Search
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        actions.UPDATE_PAGINATION({
            ...states.pagination,
            search: e.target.value,
        });
    };

    // Define Handle Debounce Search
    const handleDebounceSearch = useMemo(() => {
        return debounce(handleChangeSearch, 300);
    }, []);

    // Define Handle Change Date
    const handleChangeDate = (value: dayjs.Dayjs, name: string) => {
        actions.UPDATE_PAGINATION({
            ...states.pagination,
            [name]: validateTime(value, 'date'),
        });
    };

    // Define Handle Hooks Did Mount
    useEffect(() => {
        actions.CLEAR_STATE();
        actions.UPDATE_PAGINATION({ ...props.pagination });
    }, []);

    // Define Handle Hooks Unmount
    useEffect(() => {
        return () => {
            handleDebounceSearch.cancel();
        };
    });

    return (
        <>
            <Head>
                <title>Journal - Harmoni Web Accounting</title>
            </Head>
            <PageSection>
                <PageHeaderContainer>
                    <PageHeaderLeft>
                        <PageTitleText>Transaction</PageTitleText>
                        <PageTitleSubText>List of journal entries</PageTitleSubText>
                    </PageHeaderLeft>
                    <PageHeaderRight>
                        <ButtonPrimary variant="contained" onClick={handleCreateJournal} sx={{ mr: '10px' }}>
                            <AddOutlined sx={{ fontSize: '14px' }} />
                            Create Journal
                        </ButtonPrimary>
                        <ButtonSecondary variant="outlined" sx={{ width: '125px' }}>
                            Export
                        </ButtonSecondary>
                    </PageHeaderRight>
                </PageHeaderContainer>
                <JournalTableComponent
                    handleChangeDate={handleChangeDate}
                    handleDebounceSearch={handleDebounceSearch}
                    isLoading={isLoading}
                    data={data}
                />
                {/* <DialogDeleteComponent
                    open={states.modal.delete.show}
                    handleClose={handleCloseDelete}
                    handleDelete={() => handleDelete(modalDelete.id)}
                /> */}
            </PageSection>
        </>
    );
};

// Define SSR Journal Entries Page
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

    const getQuery = {
        currentPage: context.query.currentPage || 1,
        limit: context.query.limit || 10,
        sort: context.query.sort || 'ASC',
        search: context.query.search || '',
        startDate: context.query.startDate || validateTime(new Date(), 'date-start'),
        endDate: context.query.endDate || validateTime(new Date(), 'date'),
    } as IPagination;

    const getPagination = validatePagination(getQuery);
    const result = await models.trxJurnalHead.findAllTrxHead(getPagination);

    return {
        props: {
            fallback: result,
            pagination: getPagination,
        },
    };
};

// Define Journal Entries Layout
JournalEntriesPage.getLayout = (page: ReactElement) => <LayoutComponent>{page}</LayoutComponent>;

// Export Journal Entries Page
export default JournalEntriesPage;
