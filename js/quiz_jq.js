"use strict";
$(document).ready(function () {
    $('#submitQuiz').click(function () { // On submit
        var answers = getAns();
        var score = getNumCorrect(answers);
        showResults(score);
    });
    var getAns = function () {
        var userAnswers = []; // Store all the answers in an array.
        var q1 = $("input[name='q1']:checked").val(); // Gets only the checked radio button.
        userAnswers.push(q1); // Push the answer into the array.
        var q2 = $("input[name='q2']:checked").val();
        userAnswers.push(q2);
        var q3 = $("input[name='q3']:checked").val();
        userAnswers.push(q3);
        var q4 = $("input[name='q4']:checked").val();
        userAnswers.push(q4);
        var q5 = $("input[name='q5']:checked").val();
        userAnswers.push(q5);
        return userAnswers;
    };
    var getNumCorrect = function (ans) {
        var numCorrect = 0;
        for (var i = 0; i < 5; i++) {
            if (ans[i] === "correct") { // Looks for the "correct" value. 
                numCorrect++;
            }
        }
        return numCorrect;
    };
    var showResults = function (nc) {
        $("#resultsP").html("Score: " + nc + "/5 " + "- " + ((nc / 5) * 100) + "&percnt;"); // show score.
        var status = $(".answerStatus"); // Get an array of all span elements that have class answerStatus
        var a = getAns(); // Gets a new copy of the user's answers
        for (var i = 0; i < status.length; i++) { // Iterate through the answerStatus array and and check the answer. Display "incorrect" if necessary.
            if (a[i] != "correct") {
                $(status[i]).css("display", "block"); // Elements are hidden by default.

            } else {
                $(status[i]).css("display", "none");
            }
        }
    };
});