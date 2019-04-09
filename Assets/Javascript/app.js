var correctAnswerValue
var incorrectAnswer
var number = 5;
var intervalId;
var wins;
var losses;

var questionOne={
    question: "Where is the southern most point of the United States?",
    correctAnswer: "Key West",
    incorrectAnswer:["San Antonio", "San Diego", "Miami"]
}

var questionTwo={
    question: "What is the largest state in square footage?",
    correctAnswer: "Alaska",
    incorrectAnswer:["Texas", "California", "Montana"]
}

var questionThree={
    question: "Which state has a capital named Des Moines?",
    correctAnswer: "Iowa",
    incorrectAnswer:["Delaware", "Florida", "Nebraska"]
}

var questionFour={
    question: "Which state is Mount Rushmore located?",
    correctAnswer: "South Dakota",
    incorrectAnswer:["North Dakota", "North Carolina", "South Carolina"]
}

var questionFive={
    question: "Which state is Niagara Falls located?",
    correctAnswer: "New York",
    incorrectAnswer:["New Jersey", "Ohio", "Maine"]
}

function run() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    number--;
    $("#timer").html(number);
      if (number <= 0) {
        stop();
        alert("you are wrong")
        losses ++
      }
    }

function stop() {
    clearInterval(intervalId);
    }
  
function startGame(){
    questionLoad(questionOne);
    $("#questionDisplay").show();
    $("#startGame").hide();
}

$("#startButton").on("click", ()=> startGame());

//the parameter inside the function is a placeholder for when it will be called.
function questionLoad(question) {
    $("#question").html(question.question);
    correctAnswerValue = Math.floor(Math.random() * 4 + 1);
    if(correctAnswerValue===1){
        $("#answerOne").html(question.correctAnswer);
        $("#answerTwo").html(question.incorrectAnswer[0]);
        $("#answerThree").html(question.incorrectAnswer[1]);
        $("#answerFour").html(question.incorrectAnswer[2]);
    }
    else if(correctAnswerValue===2){
        $("#answerTwo").html(question.correctAnswer);
        $("#answerOne").html(question.incorrectAnswer[0]);
        $("#answerThree").html(question.incorrectAnswer[1]);
        $("#answerFour").html(question.incorrectAnswer[2]);
    }
    else if(correctAnswerValue===3){
        $("#answerThree").html(question.correctAnswer);
        $("#answerOne").html(question.incorrectAnswer[0]);
        $("#answerTwo").html(question.incorrectAnswer[1]);
        $("#answerFour").html(question.incorrectAnswer[2]);
    }
    else {
        $("#answerFour").html(question.correctAnswer);
        $("#answerOne").html(question.incorrectAnswer[0]);
        $("#answerTwo").html(question.incorrectAnswer[1]);
        $("#answerThree").html(question.incorrectAnswer[2]);
    }

    run()

    $("#answerOne").on("click", () => checkQuestion(1));
    $("#answerTwo").on("click", () => checkQuestion(2));
    $("#answerThree").on("click", () => checkQuestion(3));
    $("#answerFour").on("click", () => checkQuestion(4));
    
    //look up lambda function javascript and describe it in comments
        
}


function checkQuestion(checkAnswer){
    if(correctAnswerValue===checkAnswer){
        alert("correct");
        wins ++

    }
    else {
        alert("incorrect");
        losses ++
    }
}


//new screen after answers selected.
    //timer not showing
    //gif or picture
    //text
    //reload to new question

//ending quiz slide with results