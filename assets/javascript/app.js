

var correct = 0;
var incorrect = 0;
//var unanswered = ;
var timer = 60;
var interValid;

$("#start").on("click", startGame);

function startGame(){

    interValid = setInterval(decrement, 1000);

    $("#start").hide("fast");
    $("#questions").show("fast");
  
}

function decrement() {
    
    timer--;

    $("#timer").html("<h2>Time Remaining: " + timer + "<h2>");

    if (timer === 0) {

        $("#quiz").html(answers);

        stop();
}

}

function stop(){

    clearInterval(interValid);

    $("#quiz").html("<h2>Correct: " + correct + "<br> Incorrect: " + incorrect + "</h2>");
}

function answers() {
    
    var q1 = 'document.quiz.q1.value'; 
    var q2 = 'document.quiz.q2.value';
    var q3 = 'document.quiz.q3.value';
    var q4 = 'document.quiz.q4.value';
    // var questions = ['q1', 'q2', 'q3', 'q4'];

    if (q1 == "Beyond Good and Evil 2") {
        
        correct++;
    }
    else {
        incorrect++;
    }

    if (q2 != "None of the Above") {
        incorrect++;
    }
    else {
        correct++;
    }

    if (q3 != "Playstation 2") {
        
        incorrect++;
    }
    else {
        correct++;
    }

    if (q4 != "NBA 2K") {
        
        incorrect++;
    }
    else {
        correct++;

    }

}
console.log(correct)
console.log(incorrect)

$("#submit").on("click", function(){

    $("#quiz").html("<h2>Correct: " + correct + "<br> Incorrect: " + incorrect +  "</h2>");
  
   
})
answers();
