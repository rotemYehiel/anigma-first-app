import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import EditRoundedIcon from '@material-ui/icons/EditRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles((theme) => ({
    TabButtonsContainer: {
        margin: 0
    },
    btn: {
        padding: 0,
        minWidth: 'fit-content',
        '&:hover': {
            minWidth: 'fit-content'
        }
    },
}))

const TabButtonsContainer = () => {
    const classes = useStyles();
    return (
        <div className="TabButtonsContainer">
            <Button className={classes.btn}><EditRoundedIcon /></Button>
            <Button className={classes.btn}><CloseRoundedIcon /></Button>
        </div>
    )
}

export default TabButtonsContainer;