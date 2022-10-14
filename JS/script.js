// gonna need some question variables here:
var questions = [


    {
        question: "question",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 2",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 3",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },

    {
        question: "question 4",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "question 5",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "question 6",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "Do I have any idea what I'm actually doing?",
        choices: ["a little.", "not really.", "absolutely not!", "NOOOOOOP."],
        answer: "a"
    }
]
var questionIndex = 0;
// Start the quiz with a button
var startArea = document.querySelector(".start");
var startButton = document.querySelector(".startButton");
var quizArea = document.querySelector(".quiz");
startButton.addEventListener("click", function () {
    startArea.style.display = "none"
    quizArea.style.display = "block"
    displayQuestion()
    quizTimer()
})
// display questions and begin timer
function displayQuestion() {
    if (questionIndex === questions.length) {
        quizArea.style.display = "none"
        document.querySelector(".finish").style.display="block"
        document.querySelector(".score").innerText="Score: " + time
        clearInterval(timer)
        return
    }
    document.querySelector(".questionText").innerText = questions[questionIndex].question
    document.querySelector(".button1").innerText = questions[questionIndex].choices[0]
    document.querySelector(".button2").innerText = questions[questionIndex].choices[1]
    document.querySelector(".button3").innerText = questions[questionIndex].choices[2]
    document.querySelector(".button4").innerText = questions[questionIndex].choices[3]
}
// set timer to deduct incorrect answers
function answerQuestion(event) {
    var choice = event.target.innerText
    var correct = questions[questionIndex].answer
    if (choice === correct) {
        questionIndex++
        displayQuestion()
    } else {
        questionIndex++
        time = time - 10
        displayQuestion()
    }
}
// set starting time
var timer
var time = 60
function quizTimer() {
    timer = setInterval(function () {
        if (time > 0) {
            time = time - 1
            document.querySelector(".time").innerText = time
        }
    }, 1000)
}
// querySelector answer buttons, add event listeners for clicks on answer buttons
document.querySelector(".button1").addEventListener("click", answerQuestion)
document.querySelector(".button2").addEventListener("click", answerQuestion)
document.querySelector(".button3").addEventListener("click", answerQuestion)
document.querySelector(".button4").addEventListener("click", answerQuestion)

//add initials for score, store initials and score
document.querySelector(".submit").addEventListener("click", function() {
    var initials = document.querySelector(".initials").value 
    var storage = JSON.parse(localStorage.getItem("score")) || []
    var score = {
        initials,time
    }
    storage.push(score)
    localStorage.setItem("score", JSON.stringify(storage))
    window.location.reload()
})

