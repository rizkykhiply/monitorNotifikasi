// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn, useFormikContext } from 'formik';

// Import Material Modules
import { TextFieldProps } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Import Libs
import { validateTime } from '@lib/utils/helper';

// Define Base Date Component
const DateComponent: FC<FieldProps & TextFieldProps> = (props) => {
    const { error, helperText, field, form } = props;

    const { setFieldValue } = useFormikContext();

    const isTouched = getIn(form.touched, field.name);
    const errorMessage = getIn(form.errors, field.name);

    console.log(errorMessage);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={field.value}
                onChange={(value) => setFieldValue(field.name, validateTime(value, 'date'), true)}
                format="YYYY-MM-DD"
                slotProps={{
                    textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        error: error ?? Boolean(isTouched && errorMessage),
                        helperText: helperText ?? (isTouched && errorMessage),
                        FormHelperTextProps: { sx: { position: 'absolute', top: '55px' } },
                        inputProps: { style: { fontSize: '14px' } },
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default memo(DateComponent);
