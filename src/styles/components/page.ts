// Import Modules
import { Form } from 'formik';

// Import Material Modules
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface PropsPageContentFormBox {
    display: string;
}

interface PropsPageContentFormInput {
    inline?: boolean;
}

const shouldForwardProp = <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey): boolean => {
    return !props.includes(prop as string);
};

export const PageHeaderContainer = styled(Box)(({ theme }) => ({
    marginBottom: '30px',
}));

export const PageHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
}));

export const PageContentContainerCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: 'calc(100vh - 125px)',
}));

export const PageContentBox = styled(Box)(({ theme }) => ({
    background: '#FFF',
    borderRadius: '10px',
    padding: '20px',
    width: '900px',
}));

export const PageContentHeaderBox = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
}));

export const PageContentHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
}));

export const PageContentForm = styled(Form)(({ theme }) => ({}));

export const PageContentFormBox = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['flex'], props),
})<PropsPageContentFormBox>(({ theme, display }) => ({
    display: display,

    width: '100%',
    marginBottom: '40px',
}));

export const PageContentFormInput = styled(Box, {
    shouldForwardProp: (props) => shouldForwardProp(['inline'], props),
})<PropsPageContentFormInput>(({ theme, inline }) => ({
    width: '100%',
    marginRight: inline ? '30px' : 'none',
}));

export const PageContentFormLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: '8px',
}));

export const PageContentFormControl = styled(FormControl)(({ theme }) => ({}));
