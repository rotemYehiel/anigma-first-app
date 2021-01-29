import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgb(50, 50, 50)',
        },
        secondary: {
            main: 'rgb(26, 26, 26)'
        },
        third: {
            main: 'rgb(38 38 38)'
        },
        fourth: {
            main: 'rgb(3, 151, 232)'
        },
        fifth: {
            main: 'rgb(38,38,38)'
        }
    },
});

export default theme;