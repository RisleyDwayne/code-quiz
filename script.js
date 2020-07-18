
let questions = [
    {
        question: "The document body consists of ____ that contain data to be stored in the document.",
        optionA: "Variables",
        optionB: "Elements",
        optionC: "Selectors",
        optionD: "Codes",
        answer: "2"
    },
    {
        question: "An array in javascript always begins at index ____.",
        optionA: "x",
        optionB: "1",
        optionC: "null",
        optionD: "0",
        answer: "4"
    },
    {
        question: "What is the meaning of the abbreviation 'DOM'?",
        choiceA: "Database Objective Model",
        choiceB: "Document Object Management",
        choiceC: "Development Output Manager",
        choiceD: "Document Object Model",
        answer: "4"
    },
    {
        question: "With which tag pair should all HTML documents begin and end?",
        optionA: "<html></html>",
        optionB: "<body></body>",
        optionC: "<tag></tag>",
        optionD: "<page></page>",
        answer: "1"
    },
    {
        question: "Which element would one use to create an internal style sheet?",
        optionA: "<div>",
        optionB: "<style>",
        optionC: "<p>",
        optionD: "<script>",
        answer: "2"
    },
    {
        question: "The declaration for an ID selector in CSS must be preceded by a ____ symbol.",
        optionA: "$",
        optionB: "<ID>",
        optionC: "#",
        optionD: "<selector>",
        answer: "3"
    },
    {
        question: "Which of the following syntax signifies 'and'?",
        choiceA: "$$",
        choiceB: "==",
        choiceC: "||",
        choiceD: "&&",
        answer: "4"
    },
    {
        question: "An 'if' statement is an example of a ____ operation",
        choiceA: "conditional",
        choiceB: "syntatic",
        choiceC: "looping",
        choiceD: "objective",
        answer: "1"
    },
    {
        question: "Which of the following is an example of valid CSS syntax?",
        choiceA: "#id{}",
        choiceB: "header a, p{}",
        choiceC: "div h1{}",
        choiceD: "all of the above",
        answer: "4"
    },
    {
        question: "Which alert is written in a valid way?",
        choiceA: "#id{}",
        choiceB: "header a, p{}",
        choiceC: "alert('text');",
        choiceD: "all of the above",
        answer: "3"
    },
];



let score = 0;
let timeRemaining = 60;
const start = document.querySelector("#startBtn");
const timerText = document.querySelector("#timer");
const question = document.querySelector("#questionText");
const answer1 = document.querySelector("#option1");
const answer2 = document.querySelector("#option2");
const answer3 = document.querySelector("#option3");
const answer4 = document.querySelector("#option4");
const rightOrWrongText = document.querySelector("#rightOrWrong");
