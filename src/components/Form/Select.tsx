// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn } from 'formik';

// Import Material Modules
import { InputLabel, MenuItem, TextField, TextFieldProps } from '@mui/material';

// Import Interfaces
import { PropsSelectComponent } from '@interfaces/components';

// Define Base Select Component
const SelectComponent: FC<FieldProps & TextFieldProps & PropsSelectComponent> = (props) => {
    const { error, helperText, field, form, placeholder, menu } = props;

    const isTouched = getIn(form.touched, field.name);
    const errorMessage = getIn(form.errors, field.name);

    return (
        <>
            <InputLabel sx={{ fontSize: '14px', marginTop: '-2px', marginLeft: '15px', color: '#C7C7CD' }}>
                {field.value ? '' : placeholder}
            </InputLabel>
            <TextField
                {...field}
                {...props}
                variant="outlined"
                select
                error={error ?? Boolean(isTouched && errorMessage)}
                helperText={helperText ?? (isTouched && errorMessage)}
                FormHelperTextProps={{ sx: { position: 'absolute', top: '55px' } }}
                SelectProps={{ sx: { fontSize: '14px' } }}
            >
                {menu.map((data, index) => (
                    <MenuItem key={index} value={data.value}>
                        {data.name}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
};

export default memo(SelectComponent);
