import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import FullscreenRoundedIcon from '@material-ui/icons/FullscreenRounded';
import StyledBadge from '../badge/StyledBadge'

const useStyles = makeStyles((theme) => ({
    CardButtonsContainer: {
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ' .MuiTab-labelIcon .MuiTab-wrapper > *&:first-child': {
            margin: 0,
            marginRight: 15
        }
    },
    btn: {
        padding: 0,
        minWidth: 'fit-content',
        '&:hover': {
            minWidth: 'fit-content'
        },
        marginRight: 15,

    },
}))

const CardButtonsContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.CardButtonsContainer}>
            <Button className={classes.btn}><FullscreenRoundedIcon /></Button>
            <StyledBadge variant="dot"
                overlap="circle"
            />
        </div>
    )
}

export default CardButtonsContainer;