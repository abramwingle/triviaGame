var q1a = false;
var q2a = false;
var q3a = false; 
var q4a = false;
var q5a = false;
var q6a = false; 
var q7a = false;
var q8a = false;
var correctAnswers;
 
$(document).ready(function() {
    function reset () {
        correctAnswers = 0;
         incorrectAnswers = 0;
    }

    reset();

    $(".correctQuestion").click(function(){
        correctAnswers++;
        console.log("correct: " + correctAnswers);
    });

    $(".question").click(function() {
        incorrectAnswers++;
        console.log("incorrect: " + incorrectAnswers);

    });

   



    
});

