var correctAnswers;
var hour = 0;
var sec = 60;



function score() {
    $("#submitButton").text("Reset");

    document.getElementById("quizDisplay").innerHTML = ("You got " + correctAnswers + "/8 which is " + (correctAnswers/8 * 100) + "%");
    document.getElementById("quizDisplay").style.fontSize = "50px";
    document.getElementById("quizDisplay").style.width = "40%";
    document.getElementById("quizDisplay").style.backgroundColor = "white";


    $("#submitButton").click(function () {

        location.reload();
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

        timer();
        $("#correct1").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct1").css("background-color", "green");
            $("#incorrect1").css("background-color", "red");
            $('#incorrect1').off('click');


        });

        $("#incorrect1").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct1").css("background-color", "green");
            $("#incorrect1").css("background-color", "red");
            $('#correct1').off('click');


        });

        $("#correct2").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct2").css("background-color", "green");
            $("#incorrect2").css("background-color", "red");
            $('#incorrect2').off('click');


        });

        $("#incorrect2").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct2").css("background-color", "green");
            $("#incorrect2").css("background-color", "red");
            $('#correct2').off('click');


        });



        $("#correct3").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct3").css("background-color", "green");
            $("#incorrect3").css("background-color", "red");
            $('#incorrect3').off('click');


        });

        $("#incorrect3").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct3").css("background-color", "green");
            $("#incorrect3").css("background-color", "red");
            $('#correct3').off('click');


        });

        $("#correct4").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct4").css("background-color", "green");
            $("#incorrect4").css("background-color", "red");
            $('#incorrect4').off('click');

        });

        $("#incorrect4").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct4").css("background-color", "green");
            $("#incorrect4").css("background-color", "red");
            $('#correct4').off('click');




        });

        $("#correct5").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct5").css("background-color", "green");
            $("#incorrect5").css("background-color", "red");
            $('#incorrect5').off('click');


        });

        $("#incorrect5").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct5").css("background-color", "green");
            $("#incorrect5").css("background-color", "red");
            $('#correct5').off('click');


        });

        $("#correct6").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct6").css("background-color", "green");
            $("#incorrect6").css("background-color", "red");
            $('#incorrect6').off('click');


        });

        $("#incorrect6").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct6").css("background-color", "green");
            $("#incorrect6").css("background-color", "red");
            $('#correct6').off('click');


        });



        $("#correct7").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct7").css("background-color", "green");
            $("#incorrect7").css("background-color", "red");
            $('#incorrect7').off('click');


        });

        $("#incorrect7").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct7").css("background-color", "green");
            $("#incorrect7").css("background-color", "red");
            $('#correct7').off('click');


        });

        $("#correct8").one("click", function () {
            correctAnswers++;
            console.log("correct: " + correctAnswers);
            $("#correct8").css("background-color", "green");
            $("#incorrect8").css("background-color", "red");
            $('#incorrect8').off('click');


        });

        $("#incorrect8").one("click", function () {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers);
            $("#correct8").css("background-color", "green");
            $("#incorrect8").css("background-color", "red");
            $('#correct8').off('click');


        });

        $("#submitButton").click(function () {
            score();

        });

    }
    setTimeout(score, 62000);
    reset();

});


