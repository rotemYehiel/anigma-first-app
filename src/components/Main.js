import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import WidgetsRoundedIcon from '@material-ui/icons/WidgetsRounded';

import LinkTab from './LinkTab';
import DashboardPage from '../pages/DashboardPage';

const useStyles = makeStyles((theme) => ({
    Main: {
        flexGrow: 1,
        marginBottom: 10,
        height: "100%"
    },
    paper: {
        textAlign: "center",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        'box-shadow': 'unset',
    },
    dashboardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    withHeight: {
        height: "100vh"
    },
    tabs: {
        "& .MuiTab-labelIcon .MuiTab-wrapper>*:first-child": {
            marginBottom: 0
        },
        "& .MuiTab-wrapper": {
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: 'center',
        }
    },
    appBar: {
        backgroundColor: theme.palette.third.main,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addDashboardBtn: {
        display: 'inline-flex',
        fontSize: 12,
        maxWidth: 200,
        backgroundColor: theme.palette.secondary.main,
        flexGrow: 1,
        maxWidth: 'none',
        flexBasis: 0,
        flexShrink: 1,
        color: theme.palette.fourth.main,
        opacity: 0.7,
        minHeight: 72,
        minWidth: 160,
        'text-transform': 'capitalize',
        padding: '9px 12px 6px',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 12,
        backgroundColor: theme.palette.secondary.main,
        maxWidth: 200,
        fontSize: 12,
        border: 'unset',
        cursor: 'pointer'
    },
    addWidgetBtn: {
        backgroundColor: theme.palette.fourth.main,
        borderRadius: 'unset',
    },
    widgetIcon: {
        marginRight: 10
    }

}));

const Main = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const tabs = [
        {
            id: 123,
            name: 'Dashboard',
            isOpen: true,
            isActive: true
        },
        {
            id: 213,
            name: 'Dashboard',
            isOpen: true,
            isActive: false
        },
        // {
        //     id: 321,
        //     name: 'Dashboard',
        //     isOpen: true,
        //     isActive: false
        // }
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const a11yProps = (index) => {
        return {
            id: `nav-tab-${index}`,
            "aria-controls": `nav-tabpanel-${index}`
        };
    }
    return (
        <main className={classes.Main}>
            <Paper className={classes.paper}>
                <AppBar position="static" className={classes.appBar}>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        {tabs.map((tab, index) => (
                            <LinkTab key={index} label={`${index + 1}| ${tab.name}`} href="/123" {...a11yProps(index)} />
                        ))}
                        <button className={classes.addDashboardBtn}>Add Dashboard +</button>
                    </Tabs>
                    <Button className={classes.addWidgetBtn}>
                        <WidgetsRoundedIcon className={classes.widgetIcon} /> Add Widget
                    </Button >
                </AppBar>
                <DashboardPage index={value} />
            </Paper>
        </main>
    )
}

export default Main;


