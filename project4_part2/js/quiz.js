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
    validateAnswers();
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
    console.log(status)
    var a = getAns(); // Gets a new copy of the user's answers
    console.log(a)
    for (var i = 0; i < status.length; i++) { // Iterate through the answerStatus array and and check the answer. Display "incorrect" if necessary.
        if (a[i] != "correct") {
            $(status[i]).html("Incorrect");
            $(status[i]).css("display", "block"); // Elements are hidden by default.
        } else {
            $(status[i]).css("display", "none");
        }
    }
};

var validateAnswers = function () {
    if ($("input[name='q1']:checked").val() == undefined) {
        // alert("Yes I am undefined, the problem is somewhere else.")
        $("#q1AnswerStatus").html("Answer Required.");
        $("#q1AnswerStatus").css("display", "block");
    }
    if ($("input[name='q2']:checked").val() == undefined) {
        $("#q2AnswerStatus").html("Answer Required.");
        $("#q2AnswerStatus").css("display", "block");
    }
    if ($("input[name='q3']:checked").val() == undefined) {
        $("#q3AnswerStatus").html("Answer Required.");
        $("#q3AnswerStatus").css("display", "block");
    }
    if ($("input[name='q4']:checked").val() == undefined) {
        $("#q4AnswerStatus").html("Answer Required.");
        $("#q4AnswerStatus").css("display", "block");
    }
    if ($("input[name='q5']:checked").val() == undefined) {
        $("#q5AnswerStatus").html("Answer Required.");
        $("#q5AnswerStatus").css("display", "block");
    }
};

var getUsername = function () {
    var name = prompt("What is your name?");
    while (name == '') {
        name = prompt("What is your name?");
    }
    return name;
}