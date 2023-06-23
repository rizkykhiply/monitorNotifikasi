// Import Modules
import { FormEvent, memo, ReactNode, useContext } from 'react';

// Import Material Modules
import { TableContainer, Table, Pagination, PaginationItem } from '@mui/material';

// Import Context
import { StoreContext } from '@context/store/context';

// Import Styles
import { PaginationText, TablePagination } from '@styles/components/table';

// Define Props Table
interface PropsTable {
    isLoading: boolean;
    children: ReactNode;
    currentPage: number;
    countPage: number;
    totalPage: number;
}

// Define Table Component
const TableComponent = (props: PropsTable) => {
    // Destructuring Props
    const { children, countPage, currentPage, totalPage } = props;

    // Define Context
    const { states, actions } = useContext(StoreContext);

    // Define Handle Change
    const handleChange = (e: FormEvent<unknown>, newPage: number) => {
        actions.UPDATE_PAGINATION({
            ...states.pagination,
            currentPage: newPage,
        });
    };

    return (
        <>
            <TableContainer>
                <Table size="small">{children}</Table>
            </TableContainer>
            <TablePagination>
                <PaginationText>Showing list of {totalPage} entries</PaginationText>
                <Pagination
                    count={countPage}
                    page={currentPage}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="small"
                    renderItem={(item) => <PaginationItem {...item} sx={{ transition: 'none' }} />}
                />
            </TablePagination>
        </>
    );
};

// Export Table Component
export default memo(TableComponent);
