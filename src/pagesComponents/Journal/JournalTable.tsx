// Import Modules
import { ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';

// Import Material Modules
import { TableBody, TableRow, TableCell, IconButton, Tooltip, InputAdornment } from '@mui/material';

// Import Material Icons
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import Visibility from '@mui/icons-material/Visibility';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

// Import Interfaces
import { JournalData } from '@hooks/journal';

// Import Libs
import { validateCurrency, validateTime } from '@lib/utils/helper';

// Import Components
const DateComponent = dynamic(() => import('@components/Form/Custom/Date'), { ssr: false });
const InputComponent = dynamic(() => import('@components/Form/Custom/Input'), { ssr: false });
import TableComponent from '@components/Table/Table';
import TableHeaderComponent from '@components/Table/Header';

// Import Styles
import { CustomFormBox, CustomFormControl, CustomFormInput } from '@styles/components';
import { JournalEntriesContent, JournalEntriesHeader, JournalEntriesHeaderBox, JournalEntriesHeaderContainer } from '@styles/pages';

// Define Props Journal Table Interface
export interface PropsJournalTable {
    handleChangeDate: (value: dayjs.Dayjs, name: string) => void;
    handleDebounceSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    data: JournalData;
    isLoading: boolean;
}

// Define Journal Table
const JournalTable = (props: PropsJournalTable) => {
    // Destructuring Props
    const { handleChangeDate, handleDebounceSearch, data, isLoading } = props;

    // Define Header Table
    const headerTable = [
        { name: 'Date', width: '200px' },
        { name: 'Transaction No', width: '200px' },
        { name: 'Account No', width: '200px' },
        { name: 'Account Name', width: '200px' },
        { name: 'Group', width: '200px' },
        { name: 'Total Amount', width: '200px' },
        { name: 'Created By', width: '200px' },
        { name: 'Action', width: '150px' },
    ];

    return (
        <JournalEntriesContent>
            <JournalEntriesHeaderContainer>
                <JournalEntriesHeader>
                    <JournalEntriesHeaderBox>
                        <CustomFormBox display="flex">
                            <CustomFormInput spacer maxWidth="175px">
                                <CustomFormControl fullWidth variant="standard">
                                    <DateComponent
                                        size="small"
                                        label="Start Date"
                                        name="startDate"
                                        onChange={(newValue) => handleChangeDate(newValue as dayjs.Dayjs, 'startDate')}
                                        defaultValue={dayjs(validateTime(new Date(), 'date-start'))}
                                        format="YYYY-MM-DD"
                                    />
                                </CustomFormControl>
                            </CustomFormInput>
                            <CustomFormInput maxWidth="175px">
                                <CustomFormControl fullWidth variant="standard">
                                    <DateComponent
                                        size="small"
                                        label="End Date"
                                        name="endDate"
                                        onChange={(newValue) => handleChangeDate(newValue as dayjs.Dayjs, 'endDate')}
                                        defaultValue={dayjs(validateTime(new Date(), 'date'))}
                                        format="YYYY-MM-DD"
                                    />
                                </CustomFormControl>
                            </CustomFormInput>
                        </CustomFormBox>
                    </JournalEntriesHeaderBox>
                    <CustomFormInput maxWidth="200px">
                        <CustomFormControl fullWidth variant="standard">
                            <InputComponent
                                size="small"
                                variant="outlined"
                                name="search"
                                placeholder="Search"
                                onChange={handleDebounceSearch}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CustomFormControl>
                    </CustomFormInput>
                </JournalEntriesHeader>
            </JournalEntriesHeaderContainer>
            <TableComponent
                isLoading={isLoading}
                countPage={data?.countPage}
                currentPage={data?.currentPage || 1}
                totalPage={data?.totalPage}
            >
                <TableHeaderComponent header={headerTable} />
                <TableBody>
                    {data?.data?.length === 0 ? (
                        <TableRow sx={{ width: '100%' }}>
                            <TableCell align="center" colSpan={headerTable.length} sx={{ paddingTop: '50px', border: 'none' }}>
                                No Result Found
                            </TableCell>
                        </TableRow>
                    ) : (
                        data?.data?.map((value, index) => (
                            <TableRow hover key={index}>
                                <TableCell>{value.date}</TableCell>
                                <TableCell>{value.trx_no}</TableCell>
                                <TableCell>{value.account}</TableCell>
                                <TableCell>{value.account_name}</TableCell>
                                <TableCell>{value.group}</TableCell>
                                <TableCell>{validateCurrency(+value.total_amount)}</TableCell>
                                <TableCell>{value.created_by}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Tooltip title="View">
                                            <Visibility fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton>
                                        <Tooltip title="Edit">
                                            <Edit fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton>
                                        <Tooltip title="Delete">
                                            <Delete fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </TableComponent>
        </JournalEntriesContent>
    );
};

// Export Journal Table
export default JournalTable;
