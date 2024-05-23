import {
    ToggleButton,
    Text,
    makeStyles
} from "@fluentui/react-components";

const useStyles = makeStyles({
    SHButton: {
        display: 'flex',
        marginLeft: 'auto',
        width: '110%',
        boxSizing: 'border-box',
    },
    buttonText: {
        lineHeight: '18px',
        
    }
});

function SHButton({ title, isClicked, handleClick }) {

const classes = useStyles();

    return (
        <div>
            {isClicked}
            <ToggleButton appearance={'subtle'} className={classes.SHButton} onClick={handleClick}> <Text className={classes.buttonText}>{title}</Text></ToggleButton>
        </div>
    )
}
export default SHButton;