// Import Modules
import { FC, memo } from 'react';

// Import Material Modules
import { TextFieldProps } from '@mui/material';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

// Define Base Date Component
const DateComponent: FC<DatePickerProps<Dayjs> & TextFieldProps> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...props}
                slotProps={{
                    textField: {
                        size: props.size,
                        fullWidth: true,
                        FormHelperTextProps: { sx: { position: 'absolute', top: '55px' } },
                        inputProps: { sx: { fontSize: '14px' } },
                        sx: {
                            button: { marginRight: '0' },
                            svgIcon: { fontSize: props.size === 'small' ? '5px' : 'inherit' },
                            label: { fontSize: '14px' },
                        },
                    },
                    desktopPaper: {
                        sx: {
                            '& .MuiPickersDay-root': {
                                '&.Mui-selected': {
                                    color: '#FFF',
                                },
                            },
                            '& .MuiPickersDay-root:hover': {
                                background: '#00000014',
                            },
                            '& .MuiPickersYear-yearButton': {
                                fontSize: '14px',
                                '&.Mui-selected': {
                                    color: '#FFF',
                                },
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default memo(DateComponent);
