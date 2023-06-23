// Import Modules
import { FC, memo } from 'react';

// Import Material Modules
import { TextField, TextFieldProps } from '@mui/material';

// Define Base Input Component
const InputComponent: FC<TextFieldProps> = (props) => {
    return (
        <TextField
            {...props}
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
