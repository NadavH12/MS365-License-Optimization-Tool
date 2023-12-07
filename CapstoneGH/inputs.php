<?php
    session_start();

    $query_params = $_REQUEST;

    //echo print_r($query_params);

    //process query parameters somehow

    //save query as a cookie
    $_SESSION["query_params"] = $query_params;
   

    //redirect to db interaction page
    header('Location: dbconnect.php');
?>