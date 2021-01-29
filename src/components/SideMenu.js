import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ReorderIcon from '@material-ui/icons/Reorder';
import GroupIcon from '@material-ui/icons/Group';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PersonIcon from '@material-ui/icons/Person';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerClose: {
        zIndex: 999,
        position: 'static',
        height: "100%",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        background: theme.palette.primary.main,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
}));

const SideMenu = () => {
    const classes = useStyles();
    const [open] = React.useState(false);

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer,
                { [classes.drawerClose]: !open }
            )}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><DashboardRoundedIcon /></ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ReorderIcon /></ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><SyncAltIcon /></ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><GroupIcon /></ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideMenu;
