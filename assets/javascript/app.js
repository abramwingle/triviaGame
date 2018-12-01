var correctAnswers;
var hour = 0;
var sec = 30;



function score() {
    document.getElementById("quizDisplay").innerHTML = ("You got " + correctAnswers + " correct answers and "
        + incorrectAnswers + " incorrect answers");
    document.getElementById("quizDisplay").style.fontSize = "50px";
    document.getElementById("quizDisplay").style.width = "40%";
    document.getElementById("quizDisplay").style.backgroundColor = "blue";
    document.getElementById("submitButton").innerHTML + "Reset";

    $("#submitButton").click(function () {
        reset();

    })




}

function timer() {
    window.onload = function () {

        setInterval(function () {
            document.getElementById("timer").innerHTML = hour + " : " + sec;
            sec--;

        }, 1000);
    }

    if (sec <= 0) {
        clearInterval();
    }
}


$(document).ready(function () {
    function reset() {
        correctAnswers = 0;
        incorrectAnswers = 0;
    }

    reset();







    timer();
    $("#correct1").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct1").css("background-color", "green");
        $("#incorrect1").css("background-color", "red");

    });

    $("#incorrect1").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct1").css("background-color", "green");
        $("#incorrect1").css("background-color", "red");

    });

    $("#correct2").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct2").css("background-color", "green");
        $("#incorrect2").css("background-color", "red");

    });

    $("#incorrect2").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct2").css("background-color", "green");
        $("#incorrect2").css("background-color", "red");

    });



    $("#correct3").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct3").css("background-color", "green");
        $("#incorrect3").css("background-color", "red");

    });

    $("#incorrect3").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct3").css("background-color", "green");
        $("#incorrect3").css("background-color", "red");

    });

    $("#correct4").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct4").css("background-color", "green");
        $("#incorrect4").css("background-color", "red");

    });

    $("#incorrect4").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct4").css("background-color", "green");
        $("#incorrect4").css("background-color", "red");



    });

    $("#correct5").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct5").css("background-color", "green");
        $("#incorrect5").css("background-color", "red");

    });

    $("#incorrect5").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct5").css("background-color", "green");
        $("#incorrect5").css("background-color", "red");

    });

    $("#correct6").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct6").css("background-color", "green");
        $("#incorrect6").css("background-color", "red");

    });

    $("#incorrect6").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct6").css("background-color", "green");
        $("#incorrect6").css("background-color", "red");

    });



    $("#correct7").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct7").css("background-color", "green");
        $("#incorrect7").css("background-color", "red");

    });

    $("#incorrect7").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct7").css("background-color", "green");
        $("#incorrect7").css("background-color", "red");

    });

    $("#correct8").click(function () {
        correctAnswers++;
        console.log("correct: " + correctAnswers);
        $("#correct8").css("background-color", "green");
        $("#incorrect8").css("background-color", "red");

    });

    $("#incorrect8").click(function () {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);
        $("#correct8").css("background-color", "green");
        $("#incorrect8").css("background-color", "red");

    });

    $("#submitButton").click(function () {
        score();
    });


    setTimeout(score, 32000);




});


