import { makeStyles } from "@material-ui/core/styles";

import Tab from '@material-ui/core/Tab'

import TabButtonsContainer from './TabButtonsContainer';
import CardButtonsContainer from './CardButtonsContainer'

const useStyles = makeStyles((theme) => ({
    tab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.secondary.main,
        maxWidth: 200,
        fontSize: 12,
        'text-transform': 'capitalize',
    },
    CardButtonsContainer: {
    }
}));

const LinkTab = (props) => {
    const classes = useStyles();
    const { type } = props;
    return (
        <Tab
            className={classes.tab}
            style={{
                backgroundColor: type === "card" ? 'rgb(50,50,50)' : 'inherit'
            }}
            onClick={(event) => {
                event.preventDefault();
            }}
            icon={type === "card" ?
                <CardButtonsContainer className={classes.CardButtonsContainer} />
                : <TabButtonsContainer />}
            {...props}
        />

    );
}
export default LinkTab;