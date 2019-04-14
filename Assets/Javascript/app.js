var correctAnswerValue
var incorrectAnswer
var number = 15;
var intervalId;
var wins = 0;
var losses = 0;
var round = 1;


var question1={
    prompt: "Where is the southern most point of the United States?",
    correctAnswer: "Key West",
    incorrectAnswer:["San Antonio", "San Diego", "Miami"]
}

var question2={
    prompt: "What is the largest state in square footage?",
    correctAnswer: "Alaska",
    incorrectAnswer:["Texas", "California", "Montana"]
}

var question3={
    prompt: "Which state has a capital named Des Moines?",
    correctAnswer: "Iowa",
    incorrectAnswer:["Delaware", "Florida", "Nebraska"]
}

var question4={
    prompt: "Which state is Mount Rushmore located?",
    correctAnswer: "South Dakota",
    incorrectAnswer:["North Dakota", "North Carolina", "South Carolina"]
}

var question5={
    prompt: "Which state is Niagara Falls located?",
    correctAnswer: "New York",
    incorrectAnswer:["New Jersey", "Ohio", "Maine"]
}

function runAnswer(){
    clearInterval(intervalId)
    intervalId = setInterval(decrementAnswer, 2500);
 
  }

  function decrementAnswer() {
    round++
     if (round<6){
            questionLoad(this["question" + round])
        }
      else{
            $("#questionDisplay").hide();
            $("#answerScreenCorrect").hide()
            $("#answerScreenIncorrect").hide()
            $("#finalScreen").show()
            $("#wins").html(wins)
            $("#losses").html(losses)
            stop()
            $("#reset").on("click", function(){
                wins = 0
                losses = 0
                round = 1
                startGame()
            })
        }
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
        console.log("you are wrong")
        checkQuestion("time is up")
      }
    }

function stop() {
    clearInterval(intervalId);
    number = 15
    }
  
function startGame(){
    console.log(this);
    
    questionLoad(this["question" + round]);
    $("#questionDisplay").show();
    $("#startGame").hide();
    $("#finalScreen").hide()
}

$("#startButton").on("click", ()=> startGame());

//the parameter inside the function is a placeholder for when it will be called.
function questionLoad(question) {
    console.log('called load');
    console.log(question)
    $("#finalScreen").hide()
    $("#questionDisplay").show()
    $("#answerScreenCorrect").hide()
    $("#answerScreenIncorrect").hide()
    $("#question").html(question.prompt);
    correctAnswerValue = Math.floor(Math.random() * 4 + 1);
    run()
    
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
        
}
$("#answerOne").on("click", () => checkQuestion(1));
$("#answerTwo").on("click", () => checkQuestion(2));
$("#answerThree").on("click", () => checkQuestion(3));
$("#answerFour").on("click", () => checkQuestion(4));
//A lambda function is used to pass a behavior as a value. We are passing this to the checkQuestion function.

function checkQuestion(checkAnswer){
    stop()
    runAnswer()
    $("#questionDisplay").hide()
    $("#finalScreen").hide()
    if(correctAnswerValue===checkAnswer){
        $("#answerScreenCorrect").show()
        $("#correctImage").show()
        $("#correctAnswerText").html("You are correct.")
        console.log("you are correct")
        wins ++
    }
    else {
        console.log("you are incorrect");
        losses ++
        $("#answerScreenIncorrect").show()
        $("#incorrectImage").show()
        $("#incorrectAnswerText").html("You are Incorrect. The correct answer was " + this["question"+round].correctAnswer + ".")
    }
}