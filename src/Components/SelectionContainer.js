import {
    Card,
    Text,
    Display,
    makeStyles,
    shorthands
} from "@fluentui/react-components";
import Tile from "./Tile";


const useStyles = makeStyles({
    gen_card: {
        position: 'fixed',
        Display: 'flex',
        alignItems: 'center',
        width: '16%',
        right: '0',
        marginTop: '1%',
        marginLeft: '2%',
        marginRight: '0%',
        backgroundColor: 'white'
    },
});


function GenContainer({ children }) {


    const classes = useStyles();

    return (
        <div className={classes.gen_card}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', }}>
                {children}
            </div>
        </div>
    );
}
// export self made components always!
export default GenContainer;