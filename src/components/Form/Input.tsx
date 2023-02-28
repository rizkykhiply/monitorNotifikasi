// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn } from 'formik';

// Import Material Modules
import { TextField, TextFieldProps } from '@mui/material';

// Define Base Input Component
const InputComponent: FC<FieldProps & TextFieldProps> = (props) => {
    const { error, helperText, field, form } = props;

    const isTouched = getIn(form.touched, field.name);
    const errorMessage = getIn(form.errors, field.name);

    return (
        <TextField
            {...field}
            {...props}
            variant="outlined"
            error={error ?? Boolean(isTouched && errorMessage)}
            helperText={helperText ?? (isTouched && errorMessage)}
            FormHelperTextProps={{ style: { position: 'absolute', top: '55px' } }}
            inputProps={{ style: { fontSize: '14px' } }}
        />
    );
};

// Export Base Input Component
export default memo(InputComponent);
