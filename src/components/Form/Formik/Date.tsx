// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn } from 'formik';

// Import Material Modules
import { TextFieldProps } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Define Base Date Component
const DateComponent: FC<FieldProps & TextFieldProps> = (props) => {
    const { error, helperText, field, form } = props;

    const isTouched = getIn(form.touched, field.name);
    const errorMessage = getIn(form.errors, field.name);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={field.value}
                onChange={(value: string | null) => form.setFieldValue(field.name, value, false)}
                format="YYYY-MM-DD"
                slotProps={{
                    textField: {
                        fullWidth: true,
                        name: field.name,
                        error: error ?? Boolean(isTouched && errorMessage),
                        helperText: helperText ?? (isTouched && errorMessage),
                        FormHelperTextProps: { sx: { position: 'absolute', top: '55px' } },
                        inputProps: { sx: { fontSize: '14px' } },
                        onBlur: field.onBlur,
                        sx: {
                            button: { marginRight: '0' },
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
