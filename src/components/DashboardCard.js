import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import LinkTab from '../components/LinkTab';

const useStyles = makeStyles((theme) => ({
    dashboardCard: {
        height: '100%',
    },
    paper: {
        width: '100%',
        height: '100%',
    },
    appBar: {
        backgroundColor: theme.palette.fifth.main,
    },
    tabs: {
        minHeight: 30,
    },
    tab: {
        maxWidth: 'fit-content',
        'text-transform': 'capitalize',
        minHeight: 30,
        '& .MuiTab-wrapper': {
            display: 'flex',
            flexDirection: 'row',
        }
    },
}))

const DashboardCard = (props) => {
    const { card } = props;
    const classes = useStyles();
    return (
        <div className={classes.dashboardCard}>
            <Paper className={`${classes.paper}`} >
                <AppBar position="static" className={classes.appBar}  >
                    <Tabs
                        variant="fullWidth"
                        className={classes.tabs}
                    >
                        <LinkTab type="card" label="Trades" href="/Trades" className={classes.tab} />
                    </Tabs>
                </AppBar>
                <div>
                    Card Content-{card.id}
                </div>
            </Paper>
        </div>
    )
}
export default DashboardCard;


