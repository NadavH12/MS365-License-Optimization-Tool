import $ from "jquery";
import "./App.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import Header from './Components/Header.js';
import Tile from './Components/Tile.js';
import TileContainer from './Components/TileContainer.js';
import { useState } from "react";
import SHButton from "./Components/SHButton.js"
import SelectionContainer from "./Components/SelectionContainer.js"
import DetailCard from "./Components/DetailCard.js";
import ShoppingCart from "./Components/ShoppingCart.js";
import { Button } from "@fluentui/react-components"

//set test_mode to "OFF" to query live db
//set test_mode to "ON" to query "hardcoded db"  

var service_tiles_array = []


function App() {
    const [cardTitle, setCardTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    var handleClose = () => { setIsOpen(false) };
    var handleOpen = () => { setIsOpen(true); };

    var [service_tiles, set_service_tiles] = useState(service_tiles_array);

    const handleAddTile = () => {
        console.log(service_tiles);
        set_service_tiles((prevTiles) => [
            ...prevTiles,

            Tile("test_name", "test_category", handleOpen, true, setCardTitle)


        ]);
        console.log(service_tiles);
    };

    const handleEditTile = () => {
        //In Progress
        
    }


    //var test_mode = "OFF";
    var test_mode = "ON";

    const [isShown0, setShown0] = useState(true);
    const [isShown1, setShown1] = useState(true);
    const [isShown2, setShown2] = useState(true);
    const [isShown3, setShown3] = useState(true);
    const [isShown4, setShown4] = useState(true);
    const [isShown5, setShown5] = useState(true);
    const [isShown6, setShown6] = useState(true);
    const [isShown7, setShown7] = useState(true);
    const [isShown8, setShown8] = useState(true);
    const [isShown9, setShown9] = useState(true);
    const [isShown10, setShown10] = useState(true);
    const [isShown11, setShown11] = useState(true);
    const [isShown12, setShown12] = useState(true);
    const [isShown13, setShown13] = useState(true);
    const [isShown14, setShown14] = useState(true);
    const [isShown15, setShown15] = useState(true);
    const [isShown16, setShown16] = useState(true);
    const [isShown17, setShown17] = useState(true);
    const [isShown18, setShown18] = useState(true);
    const [isShown19, setShown19] = useState(true);
    const [isShown20, setShown20] = useState(true);
    const [isShown21, setShown21] = useState(true);
    const [isShown22, setShown22] = useState(true);
    const [isShown23, setShown23] = useState(true);


    const states = [isShown0, isShown1, isShown2, isShown3, isShown4, isShown5, isShown6,
        isShown7, isShown8, isShown9, isShown10, isShown11, isShown12, isShown13, isShown14, isShown15,
        isShown16, isShown17, isShown18, isShown19, isShown20, isShown21, isShown22, isShown23];

    const setStates = [setShown0, setShown1, setShown2, setShown3, setShown4, setShown5, setShown6,
        setShown7, setShown8, setShown9, setShown10, setShown11, setShown12, setShown13, setShown14, setShown15,
        setShown16, setShown17, setShown18, setShown19, setShown20, setShown21, setShown22, setShown23];

    const titles = ["Artificial Intelligence (AI)", "Auditing (User & Administrator)", "Application Development", "Business Management",
        "Cloud Services", "Communication/Collaboration", "Compliance", "Data Analytics", "Data Management", "Education Management",
        "Finance Management", "Machine Learning", "Medical Data Management", "Microsoft Outlook (Email)", "Minecraft (Education)",
        "Mobile Device Management", "Productivity", "Security", "Social Media Engagement", "Video Creation/Editing", "Video Streaming",
        "Windows Operating System", "Workflow Automation", "Other"]




    service_tiles = Final_services_renderer(test_mode, states, titles);



    function update_cart_and_tiles_list(tile_to_change) {
        //setServiceTiles([]);

        console.log("hi")

        console.log(tile_to_change);

    }



    function Final_services_renderer(test_mode, states, titles) {
        var servicesStr = send_ajax("load", test_mode).responseText;

        if (servicesStr === "Error connecting to SQL Server.") {
            return "Error connecting to SQL Server.";
        }

        var parsed_services;

        if (test_mode === "OFF") {
            parsed_services = parse_services_prod(servicesStr);

        } else {
            parsed_services = parse_services_test(servicesStr);
        }

        var inCart = "false"

        for (var i = 0; i < parsed_services.length; i++) {
            var service = parsed_services[i];
            var name = service.Service_Plans_Included_Friendly_Names
            var cat = service.Service_Category;
            var isShown = assignStateToTile(cat, states, titles)
            var service_tile = Tile(name, cat, handleOpen, isShown, setCardTitle);


            service_tiles[i] = service_tile;
        }

        return service_tiles;
    }


    function assignStateToTile(cat, states, titles) {

        for (var i = 0; i <= 22; i++) {
            var title = titles[i]

            if (cat == title) {
                return states[i]
            }

        }

        return states[23]
    }


    function send_ajax(request_type, test_mode) {
        var services = []

        return $.ajax({
            async: false,
            type: "POST",
            url: "http://localhost:8000/server.php",
            data: { "request": request_type, "test_mode": test_mode },
            success(data) {
                services = data;
            },
        });
    }


    function parse_services_prod(services) {
        var parsed_services = services.split("}")

        parsed_services.pop()

        for (var i = 0; i < parsed_services.length; i++) {
            var parsed_service = parsed_services[i]
            parsed_service += "}";
            parsed_service = parsed_service.slice(1)
            parsed_service = parsed_service.replaceAll("\\", "");
            parsed_services[i] = JSON.parse(parsed_service);
        }

        return parsed_services;
    }


    //function takes in array of strings taken from backend
    //returns the corresponding array with JSON objects
    function parse_services_test(services) {
        var parsed_services = services.split("}")

        parsed_services.pop()

        for (var i = 0; i < parsed_services.length; i++) {
            var parsed_service = parsed_services[i]
            parsed_service += "}";
            if (i === 0) {
                parsed_service = parsed_service.slice(2);
            }
            else {
                parsed_service = parsed_service.slice(1);
            }
            parsed_service = parsed_service.replaceAll("\\", "");
            parsed_services[i] = JSON.parse(parsed_service);
        }

        return parsed_services;
    }





    // App.js rendering section 
    return (
        <FluentProvider theme={webLightTheme}>

            
            <ShoppingCart></ShoppingCart>


            <Header></Header>
            <Button onClick={handleAddTile}>Add Tiles</Button>
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 1fr' }}>
                <TileContainer id="main_tile_container">

                    {service_tiles.map((tile, index) => (
                        <div key={index}>
                            {index}
                            {tile}
                        </div>
                    ))}
                </TileContainer>

                <SelectionContainer>
                        <SHButton
                            title={titles[0]}
                            isClicked={setStates[0] === true}
                            handleClick={() => states[0] ? (setStates[0](false)) : setStates[0](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[1]}
                            isClicked={setStates[1] === true}
                            handleClick={() => states[1] ? (setStates[1](false)) : setStates[1](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[2]}
                            isClicked={setStates[2] === true}
                            handleClick={() => states[2] ? (setStates[2](false)) : setStates[2](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[3]}
                            isClicked={setStates[3] === true}
                            handleClick={() => states[3] ? (setStates[3](false)) : setStates[3](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[4]}
                            isClicked={setStates[4] === true}
                            handleClick={() => states[4] ? (setStates[4](false)) : setStates[4](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[5]}
                            isClicked={setStates[5] === true}
                            handleClick={() => states[5] ? (setStates[5](false)) : setStates[5](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[6]}
                            isClicked={setStates[6] === true}
                            handleClick={() => states[6] ? (setStates[6](false)) : setStates[6](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[7]}
                            isClicked={setStates[7] === true}
                            handleClick={() => states[7] ? (setStates[7](false)) : setStates[7](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[8]}
                            isClicked={setStates[8] === true}
                            handleClick={() => states[8] ? (setStates[8](false)) : setStates[8](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[9]}
                            isClicked={setStates[9] === true}
                            handleClick={() => states[9] ? (setStates[9](false)) : setStates[9](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[10]}
                            isClicked={setStates[10] === true}
                            handleClick={() => states[10] ? (setStates[10](false)) : setStates[10](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[11]}
                            isClicked={setStates[11] === true}
                            handleClick={() => states[11] ? (setStates[11](false)) : setStates[11](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[12]}
                            isClicked={setStates[12] === true}
                            handleClick={() => states[12] ? (setStates[12](false)) : setStates[12](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[13]}
                            isClicked={setStates[13] === true}
                            handleClick={() => states[13] ? (setStates[13](false)) : setStates[13](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[14]}
                            isClicked={setStates[14] === true}
                            handleClick={() => states[14] ? (setStates[14](false)) : setStates[14](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[15]}
                            isClicked={setStates[15] === true}
                            handleClick={() => states[15] ? (setStates[15](false)) : setStates[15](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[16]}
                            isClicked={setStates[16] === true}
                            handleClick={() => states[16] ? (setStates[16](false)) : setStates[16](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[17]}
                            isClicked={setStates[17] === true}
                            handleClick={() => states[17] ? (setStates[17](false)) : setStates[17](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[18]}
                            isClicked={setStates[18] === true}
                            handleClick={() => states[18] ? (setStates[18](false)) : setStates[18](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[19]}
                            isClicked={setStates[19] === true}
                            handleClick={() => states[19] ? (setStates[19](false)) : setStates[19](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[20]}
                            isClicked={setStates[20] === true}
                            handleClick={() => states[20] ? (setStates[20](false)) : setStates[20](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[21]}
                            isClicked={setStates[21] === true}
                            handleClick={() => states[21] ? (setStates[21](false)) : setStates[21](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[22]}
                            isClicked={setStates[22] === true}
                            handleClick={() => states[22] ? (setStates[22](false)) : setStates[22](true)}
                        >
                        </SHButton>

                        <SHButton
                            title={titles[23]}
                            isClicked={setStates[23] === true}
                            handleClick={() => states[23] ? (setStates[23](false)) : setStates[23](true)}
                        >
                        </SHButton>
                    
                </SelectionContainer>
                <DetailCard cardState={isOpen} handleClose={handleClose} card_title={cardTitle} add_to_cart_fxn={update_cart_and_tiles_list}></DetailCard>
            </div>
        </FluentProvider>
    );
}

export default App;

//so there is one card component for all the tiles which is ok, but right now clicking on each tile just opens up
//the same 1 card. We can keep 1 card but we need to have some state transferred depending on which tile was clicked 
//so that the card can display info, and have the appropriate add to cart button 
