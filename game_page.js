player1_name = localStorage.getItem(player1_name);
player1_name = localStorage.getItem(player2_name);

player1_score = 0;
player1_score = 0;

document.getElementById(player1_name).innerHTML=player1_name + " : ":
document.getElementById(player2_name).innerHTML=player2_name + " : ":

document.getElementById(player1_score).innerHTML=player1_score;
document.getElementById(player1_score).innerHTML=player2_score;

document.getElementById(player1_question).innerHTML= "Question turn - " player1_name
document.getElementById(player2_answer).innerHTML= "Answer turn - " player2_name

function send() {
    question_number = "<h4>" + number1 + "X"+ number2 +"</h4>
    input_box = "<br>Answer : <input type ='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innterHtml = row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}