
function text_onclick(){
    var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow(table.rows.length);

    var text_field_count = document.getElementsByClassName("text_field").length;

    var next_text_field_id = "text_field" + text_field_count;

    row.innerHTML = "<td>Text Input " + (text_field_count + 1) + ":" + "</td>" + "<td><textarea id=\"" + next_text_field_id + "\" name=\"" + next_text_field_id + "\" class=\"text_field\" rows=\"4\" cols=\"21\"></textarea></td>";
}



function mc_onclick(){
    var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow(table.rows.length);

    var mc_count = document.getElementsByClassName("mc_field").length;

    var choice_set_name =  "mc_field" + mc_count;

    var cell1 = row.insertCell();
    cell1.className = "mc_field"
    cell1.innerHTML = "Multiple Choice Input " + (mc_count + 1) + ":";

    var cell2 = row.insertCell();

    choice_A_id = mc_count + "A";
    choice_B_id = mc_count + "B";
    choice_C_id = mc_count + "C";

    const select = document.createElement("select");
    select.id = choice_set_name;
    select.name = choice_set_name;
    
    const optionA = document.createElement("option");
    optionA.id = choice_set_name;
    optionA.value = choice_A_id;
    optionA.innerText = "Choice A";

    const optionB = document.createElement("option");
    optionB.id = choice_set_name;
    optionB.value = choice_B_id;
    optionB.innerText = "Choice B";

    const optionC = document.createElement("option");
    optionC.id = choice_set_name;
    optionC.value = choice_C_id;
    optionC.innerText = "Choice C";

    select.appendChild(optionA)
    select.appendChild(optionB)
    select.appendChild(optionC)

    cell2.appendChild(select)
}

