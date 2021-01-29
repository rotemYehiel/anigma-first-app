import './App.css';
import { Paper } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';

import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';

import MainHeader from './components/MainHeader'
import SideMenu from './components/SideMenu'
import Main from './components/Main'

const useStyles = makeStyles(theme => ({
  App: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    overflow: 'hidden',
  },
  sideBar: {
    height: "100vh"
  },
  mainStayle: {
    padding: 5,
  },
  margin: {
    margin: theme.spacing(1),
  },
  chatBtn: {
    zIndex: 1001,
    position: 'fixed',
    bottom: 0,
    right: 0,
  }
}));


function App(props) {
  const classes = useStyles();
  return (
    <div className="App" >
      <Paper className={classes.paper}>
        <Grid container >
          <Grid item xs={12} >
            <MainHeader />
          </Grid>
          <Grid item xs='auto' className={classes.sideBar} >
            <SideMenu />
          </Grid>
          <Grid item xs={11} className={classes.mainStayle}>
            <Main />
          </Grid>
        </Grid>
        <Fab color='primary' aria-label="add" className={`${classes.margin} ${classes.chatBtn}`}>
          <ModeCommentRoundedIcon />
        </Fab>
      </Paper>
    </div >
  );
}

export default App;
