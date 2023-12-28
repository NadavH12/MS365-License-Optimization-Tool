<?php

session_start();
$query_params = $_SESSION["query_params"];
$product = $query_params["text_field0"];

echo "<h2>Plans Including: " . $product . "</h2>";
echo "<a href=\"action_page.php\">Back To Query Page</a>";
echo "<br><br>";


try {
    $conn = new PDO("sqlsrv:server = *********; Database = ******", "**********", "*******");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



    $query_table_sql = "SELECT DISTINCT Product_Display_Name FROM [dbo].[MS_Plans] WHERE Product_Display_Name LIKE '%" . $product . "%';";
    $result = $conn->query($query_table_sql);

    $count = 1;

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {

        echo $count . ". ";
        echo $row["Product_Display_Name"];
        echo "<br>";

        $count = $count + 1;

    }

    if($count === 1){
        echo "No Plans Available";
    }
    



}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}


?>
