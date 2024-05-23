import {
    Card,
    Text,
    Display,
    makeStyles,
    shorthands
} from "@fluentui/react-components";
import Tile from "./Tile";


const useStyles = makeStyles({
    card: {
        Display: 'flex',
        justifyContent: 'center',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '0%',
        backgroundColor: 'white'
    },
});


function TileContainer({ children }) {
    const classes = useStyles();
    return (
        <Card>
            {/*Please don't remove the style for the div, for some reason the makeStyles can't do it alone*/}
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {children}
            </div>
        </Card>
    );
}
// export self made components always!
export default TileContainer;