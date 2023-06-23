// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn } from 'formik';

// Import Material Modules
import { TextField, TextFieldProps } from '@mui/material';

// Define Base Input Component
const InputComponent: FC<FieldProps & TextFieldProps> = (props) => {
    const { error, helperText, field, form } = props;

    const isTouched = getIn(form?.touched, field?.name);
    const errorMessage = getIn(form?.errors, field?.name);

    return (
        <TextField
            {...field}
            {...props}
            error={error ?? Boolean(isTouched && errorMessage)}
            helperText={helperText ?? (isTouched && errorMessage)}
            FormHelperTextProps={{ sx: { position: 'absolute', top: '55px' } }}
            inputProps={{
                sx: {
                    fontSize: '14px',
                    '&[type=number]': {
                        MozAppearance: 'textfield',
                    },
                    '&::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                    '&::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                },
            }}
        />
    );
};

// Export Base Input Component
export default memo(InputComponent);
