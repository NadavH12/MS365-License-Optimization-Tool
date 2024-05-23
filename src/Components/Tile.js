import {
    Card,
    Text,
    Button,
    Image,
    makeStyles,
    shorthands,
    Subtitle2,
    Body2,
    Link
} from "@fluentui/react-components";
import { useState } from "react";

    // generating shadows of blue for the tile images
    function generateRandomHex() {
        // random integer between 0-15
        const randomDecimal = Math.floor(Math.random() * 16);

        // convert the decimal value to a hexadecimal string with two digits
        const hexString = randomDecimal.toString(16).padStart(2, '0');

        return hexString;
    }

    const randomHex = generateRandomHex();
    const partialColor = '#ADD8';


var colorToBe = partialColor.concat('', randomHex);

//console.log(colorToBe);

// make a random generated color for each tile once rendered, in the image card
const useStyles = makeStyles({
    tile: {
        width: "20em",
        height: "16em",
        backgroundColor: '#f5f5f5',
        marginLeft: '1.8em',
        marginRight: '5%',
        marginTop: '0.5%',
        marginBottom: '1%',
    },
    image: {
        backgroundColor: `white`,
        height: "69%",
        marginLeft: '0',
        marginRight: '0.5%',
        marginTop: '0.5%',
        marginBottom: '1%',
        boxShadow: '0px 0px 1px #dddddd'
    },
    textMargins: {
        lineHeight: '2px'
    }
});

// service_name & category simply passes given service name
// openCard passes in function handleOpen which in App.js changes a hook to render the portal on click
function Tile(service_name, service_category, handleOpen, isShown, setCardTitle) {

    // styling hook is called here but specified above
    const classes = useStyles();

    if (isShown == false){
        return "";
    }

    function new_on_click(){
        console.log("hello")
        handleOpen();
        setCardTitle(service_name);
       // var tile = Tile(service_name, service_category, handleOpen, isShown, setCardTitle)
    
    }

    return (
        <Card className={classes.tile} appearance={`filled-alternative`} onClick={new_on_click}>

            <Card className={classes.image}></Card>

            <Subtitle2 align={`start`}>{service_name}</Subtitle2>

            <Body2 className={classes.textMargins} align={`start`}>{service_category}</Body2>
            
        </Card>

    );
}
// export self made components always!
export default Tile;