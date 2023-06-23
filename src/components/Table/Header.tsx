// Import Material Modules
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';

// Define Header
interface Header {
    name: string;
    width?: string;
}

// Define Props Table Header
interface PropsTableHeader {
    header: Header[];
}

// Define Table Header Component
const TableHeaderComponent = (props: PropsTableHeader) => {
    // Destructuring Props
    const { header } = props;

    // Define Handle Change
    const handleChange = () => {};

    return (
        <TableHead>
            <TableRow>
                {header.map((value, index) => (
                    <TableCell key={index} sx={{ color: '#8C8C8C', fontSize: '12px', fontWeight: '700', width: value.width }}>
                        <TableSortLabel direction="asc">{value?.name}</TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

// Export Table Header Component
export default TableHeaderComponent;
