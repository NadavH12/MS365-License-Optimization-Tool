<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    validateRequest();
    $query = getQuery();
    $test_mode = getTestMode();
    queryDB($query, $test_mode);
     


    function validateRequest(){
        $post_length = count($_POST);
        if ($post_length < 1) {
            die("Server Error: POST array empty");
        } else {
            return;
        }
    }


    function getQuery(){
        $frontend_request = $_POST["request"];

        if ($frontend_request == "load"){
            $query = "SELECT DISTINCT Service_Plans_Included_Friendly_Names, Service_Category, Service_Plan_Id FROM [dbo].SPC";
        }
        else {
            die("Server Error: query string empty");
        }
        return $query;
    }

    function getTestMode(){
        $test_mode = $_POST["test_mode"];
        return $test_mode;
    }


    function queryDB($query, $test_mode){


        if ($test_mode == "OFF") {

            try {
                
                $conn = new PDO("sqlsrv:server = ############################; Database = ###########", "##########", "#######");
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                

                $result = $conn->query($query);

                $return_vals = array();

                while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                    array_push($return_vals, $row);
                }
                                
                
                echo (json_encode($return_vals));

            
            } catch (PDOException $e) {
                print("Error connecting to SQL Server.");
                echo "Error connecting to SQL Server.";
                die(print_r($e));
            }
        }

        else {

            //hard-coded DB return val
            $return_vals = array('{"Service_Plans_Included_Friendly_Names":"AAD_PREMIUM\","Service_Category":"Security","Service_Plan_Id":"41781fb2-bc02-4b7c-bd55-b576c07bb09d"},{"Service_Plans_Included_Friendly_Names":"ADALLOM_S_DISCOVERY","Service_Category":"Security","Service_Plan_Id":"932ad362-64a8-4783-9106-97849a1a30b9"},{"Service_Plans_Included_Friendly_Names":"AI Builder capacity add-on","Service_Category":"Artificial Intelligence (AI)","Service_Plan_Id":"a7c70a41-5e02-4271-93e6-d9b4184d83f5"},{"Service_Plans_Included_Friendly_Names":"AI Builder capacity Per App add-on","Service_Category":"Artificial Intelligence (AI)","Service_Plan_Id":"5d7a2e9a-4ee5-4f1c-bc9f-abc481bf39d8"},{"Service_Plans_Included_Friendly_Names":"AI Builder capacity Per User add-on","Service_Category":"Artificial Intelligence (AI)","Service_Plan_Id":"74d93933-6f22-436e-9441-66d205435abb"},{"Service_Plans_Included_Friendly_Names":"AI Builder capacity Per User add-on","Service_Category":"Artificial Intelligence (AI)","Service_Plan_Id":"91f50f7b-2204-4803-acac-5cf5668b8b39"},{"Service_Plans_Included_Friendly_Names":"APP CONNECT","Service_Category":null,"Service_Plan_Id":"0bfc98ed-1dbc-4a97-b246-701754e48b17"}');    
            echo (json_encode($return_vals));
        }

    }
