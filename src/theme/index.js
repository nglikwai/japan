import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: { main: '#4f6368' },
        secondary: { main: '#827e76' },
        success: { main: '#8a978b' },
        tertiary: { main: '#c5cfc4' },

    },
    typography: {
        fontFamily: [
            'Microsoft-JhengHei',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

