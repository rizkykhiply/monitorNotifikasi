// Import Modules
import { Form } from 'formik';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

interface PropsFormBox {
    display: string;
}

interface PropsFormInput {
    spacer?: boolean;
}

interface PropsFormContainer {
    width: string;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

// ================================ CUSTOM ================================ //

export const CustomFormBox = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['display'], props),
})<PropsFormBox>(({ theme, display }) => ({
    display: display,
    alignItems: 'center',

    width: '100%',
}));

export const CustomFormInput = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['spacer'], props),
})<PropsFormInput>(({ theme, spacer }) => ({
    width: '100%',
    marginRight: spacer ? '10px' : 'none',
}));

export const CustomFormLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: '8px',
}));

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
    width: '100%',
}));

export const CustomFormAction = styled(Box)(({ theme }) => ({
    width: '100%',
}));

// ================================ FORMIK ================================ //

export const FormikFormContainer = styled(Form, { shouldForwardProp: (props) => shouldForwardProp(['width'], props) })<PropsFormContainer>(
    ({ theme, width }) => ({
        width: width,
    }),
);

export const FormikSelectPlaceholder = styled(InputLabel)(({ theme }) => ({
    fontSize: '14px',
    color: '#C7C7CD',
    marginTop: '-3px',
    marginLeft: '15px',
}));

export const FormikSelectMenu = styled(MenuItem)(({ theme }) => ({
    fontSize: '14px',
    '&.Mui-selected': {
        background: '#00000014',
    },
    '&.Mui-selected:focus': {
        background: '#00000014',
    },
    '&.Mui-selected:hover': {
        background: '#00000014',
    },
}));
