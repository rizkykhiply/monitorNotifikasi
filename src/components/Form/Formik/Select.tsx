// Import Modules
import { FC, memo } from 'react';
import { FieldProps, getIn } from 'formik';

// Import Material Modules
import { TextField, TextFieldProps } from '@mui/material';

// Import Styles
import { FormikSelectMenu, FormikSelectPlaceholder } from '@styles/components';

// Define Select Data
interface SelectData {
    value: string | number;
    name: string;
}

// Define Props Select Component
interface PropsSelectComponent {
    menu: SelectData[];
}

// Define Base Select Component
const SelectComponent: FC<FieldProps & TextFieldProps & PropsSelectComponent> = (props) => {
    const { error, helperText, field, form, placeholder, menu } = props;

    const isTouched = getIn(form.touched, field.name);
    const errorMessage = getIn(form.errors, field.name);

    return (
        <>
            <FormikSelectPlaceholder>{field.value ? '' : placeholder}</FormikSelectPlaceholder>
            <TextField
                {...field}
                {...props}
                select
                error={error ?? Boolean(isTouched && errorMessage)}
                helperText={helperText ?? (isTouched && errorMessage)}
                FormHelperTextProps={{ sx: { position: 'absolute', top: '55px' } }}
                SelectProps={{
                    sx: { fontSize: '14px' },
                    MenuProps: {
                        style: { maxHeight: '300px', position: 'absolute', zIndex: 1 },
                        disableScrollLock: true,
                        disableAutoFocusItem: true,
                    },
                }}
            >
                {menu.map((data, index) => (
                    <FormikSelectMenu key={index} value={data.value}>
                        {data.name}
                    </FormikSelectMenu>
                ))}
            </TextField>
        </>
    );
};

export default memo(SelectComponent);
