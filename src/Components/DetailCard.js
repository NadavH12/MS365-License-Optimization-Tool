import {
    Card,
    Text,
    Display,
    makeStyles,
    Button,
    FluentProvider,
    webLightTheme,
    Subtitle2
} from "@fluentui/react-components";
import ReactDom from 'react-dom';
import { createPortal } from "react-dom";
import { useState } from "react";
import { Dismiss28Regular } from "@fluentui/react-icons";
import Tile from "./Tile"
import TileContainer from "./TileContainer";
import SelectionContainer from "./SelectionContainer";

// shorthand for route to be rendered on other DOM
const mountToOverlay = document.getElementById("overlays");

// styling details
const useStyles = makeStyles({
    
    containingDiv: {
        position: 'fixed',
        top: '25%',
        left: '25%',
        justifyContent: 'center',
    },
    card: {
        
        Display: 'flex',
        justifyContent: 'center',
        // marginTop: '6%',
        // marginLeft: '2%',
        // marginRight: '2%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(6px)',
        height: '30em',
        width: '40em'
    },
    xOut: {
        position: 'absolute',
        top: '0',
        right: '0',
        marginTop: '10px',
        marginRight: '10px',
    },
    outerContainer: {
        height: '100px',
    }
});

function DetailCard({ cardState, handleClose, card_title, add_to_cart_fxn }) {
    const classes = useStyles();
    return createPortal(
        <>
        {/*cardState is whether the card is open or not, if true the portal is rendered whether it is rendered is determined 
        by the hook isOpen in App that changes based on clicking on the tiles themselves.
        cardState can also close the portal by declaring handleClose onClick, which is pushed from App as prop into here
        */}
            {cardState &&
            <FluentProvider theme={webLightTheme}>
                <div className={classes.containingDiv}>
                    <Card focusMode={`no-tab`} appearance={`filled`} className={classes.card}>
                        <h3>{card_title}</h3>
                        <Button onClick={add_to_cart_fxn(card_title)}>Add To Cart</Button>
                        <Dismiss28Regular className={classes.xOut} onClick={handleClose}></Dismiss28Regular>
                        <SelectionContainer >
                            <Subtitle2>{card_title}</Subtitle2>
                        </SelectionContainer>
                        <SelectionContainer >
                            <p style={{ height:'100px'}}></p>
                        </SelectionContainer>
                    </Card>
                </div>
                </FluentProvider>
            }
        </>
        , mountToOverlay)
}
export default DetailCard;
