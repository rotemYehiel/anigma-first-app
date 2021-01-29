import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DashboardCard from '../components/DashboardCard';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 2,
        backgroundColor: theme.palette.secondary.main,
        'box-shadow': 'unset',
        'max-height': '100vh',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        height: '100%'
    },
    ' .MuiGridListTile-tile': {
        height: 0
    },
    gridListTile: {
        height: '100 %',
        '& .MuiGridListTile-tile': {
            height: 'fit-content',
            height: '100 %'
        }
    }
}))

const DashboardPage = (props) => {
    const classes = useStyles();
    const cardList = [
        {
            id: 1,
            cardName: 'first',
            cols: 6,
            rows: 2
        },
        {
            id: 2,
            cardName: 'seconed',
            cols: 2,
            rows: 2
        },
        {
            id: 3,
            cardName: 'third',
            cols: 4,
            rows: 2
        },
        {
            id: 4,
            cardName: 'fourth',
            cols: 2,
            rows: 6
        },
        {
            id: 5,
            cardName: 'fifth',
            cols: 6,
            rows: 6
        },
        {
            id: 6,
            cardName: 'sixth',
            cols: 2,
            rows: 2
        },
        {
            id: 7,
            cardName: 'seventh',
            cols: 1,
            rows: 1.5
        },

        {
            id: 8,
            cardName: 'eighth',
            cols: 2,
            rows: 6
        },
        {
            id: 9,
            name: 'ninth',
            cols: 1,
            rows: 1.5
        },
        {
            id: 10,
            cardName: 'tenth',
            cols: 4,
            rows: 2
        },
        {
            id: 11,
            cardName: 'tenth+1',
            cols: 3,
            rows: 2
        },
        {
            id: 12,
            cardName: 'tenth+2',
            cols: 2,
            rows: 2
        },

    ]
    return (
        <div className="dashboardPage">
            <Paper className={classes.paper}>
                <GridList cellHeight={50} className={classes.gridList} cols={12}>
                    {cardList.map((card, index) => (
                        <GridListTile key={index} cols={card.cols || 1} rows={card.rows || 1} className={classes.gridListTile}>
                            <DashboardCard card={card} index={index + 1} />
                        </GridListTile>
                    ))}
                </GridList>
            </Paper>
        </div>
    )
}
export default DashboardPage;
