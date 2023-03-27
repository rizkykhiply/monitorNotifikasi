// Import Modules
import { createTheme } from '@mui/material/styles';

// Define Base Theme
const theme = createTheme({
    palette: {
        action: {
            disabledBackground: '',
            disabled: '#FFF',
        },
        primary: {
            main: '#ED213A',
            light: '#D44A4F',
            dark: '#952327',
        },
        background: {
            default: 'linear-gradient(to right, #ED213A, #93291E)',
            paper: '#F7F7F7',
        },
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 14,
        fontWeightLight: 400,
        h1: {
            fontSize: 42,
            fontWeight: 700,
        },
        h2: {
            fontSize: 36,
            fontWeight: 700,
        },
        h3: {
            fontSize: 28,
            fontWeight: 700,
        },
        h4: {
            fontSize: 24,
            fontWeight: 700,
        },
        h5: {
            fontSize: 20,
            fontWeight: 700,
        },
        h6: {
            fontSize: 16,
            fontWeight: 700,
        },
    },
});

// Export Base Theme
export default theme;
