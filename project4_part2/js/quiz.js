"use strict";
$(document).ready(function () {
    var name = getUsername();
    $('#submitQuiz').click(function () { // On submit
        var answers = getAns();
        var score = getNumCorrect(answers);
        showResults(name);
    });
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
var getNumCorrect = function (answers) {
    var numCorrect = 0;
    for (var i = 0; i < 5; i++) {
        if (answers[i] === "correct") { // Looks for the "correct" value. 
            numCorrect++;
        }
    }
    return numCorrect;
};
var showResults = function (name) {
    var nc = getNumCorrect(getAns());
    $("#resultsP").html(name + "'s " + "Score: " + nc + "/5 " + "- " + ((nc / 5) * 100) + "&percnt;"); // show score.
    var status = $(".answerStatus"); // Get an array of all span elements that have class answerStatus
    var a = getAns(); // Gets a new copy of the user's answers
    for (var i = 0; i < status.length; i++) { // Iterate through the answerStatus array and and check the answer. Display "incorrect" if necessary.
        if (a[i] == undefined) {
            $("#q" + (i + 1) + "AnswerStatus").html("Answer Required.");
            $("#q" + (i + 1) + "AnswerStatus").css("display", "block");
        } else if (a[i] != "correct") {
            $("#q" + (i + 1) + "AnswerStatus").html("Incorrect");
            $("#q" + (i + 1) + "AnswerStatus").css("display", "block");
        } else {
            $("#q" + (i + 1) + "AnswerStatus").css("display", "none");
        }
    }
};

var getUsername = function () {
    var name = prompt("What is your name?");
    while (name == '') {
        name = prompt("What is your name?");
    }
    return name;
};