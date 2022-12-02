import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#15B0F8',
            text: '#30A0E0',
            background: '#ffffff99'
        },
        secondary: {
            main: '#7415FF',
            light: '#B9B3F8',
            background: '#C4C4C42B'
        },
        text: {
            main: "#000000",
            light: "#969696",
            purple: "#7415FF"
        }

    },
});

export default lightTheme;