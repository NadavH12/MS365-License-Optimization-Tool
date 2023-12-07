<?php
    echo "


    <h1>Welcome to IT Partner LLC MS365 License Optimization Tool</h1>
    <h3>Requirements Form</h3>

    <div><a href=\"homepage.php\">Logout</a></div>

    <br>
    
    

        <form action=\"inputs.php\" method=\"get\">
            <table>
                <caption>Select Your Input</caption>

                <tr>
                    <td colspan=\"2\">
                        <button onclick=\"text_onclick()\" type=\"button\" id=\"text_input\" name=\"text_input\">Text</button>
                        <button onclick=\"mc_onclick()\" type=\"button\" id=\"multiple_choice_input\" name=\"multiple_choice_input\">Multiple Choice</button>
                        <button type=\"button\" id=\"other\" name=\"other\">Other</button>
                        <button type=\"submit\" formmethod=\"post\">Submit</button>
                    </td>
                </tr>

                <tr><td><br></td></tr>
                <tr><td><br></td></tr>

            </table>
        </form>

            

            


    ";

?>




<html>
    <head>
        <title>Welcome</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <script src="index.js"></script>
    </body>
</html>