var optimisticScore = 0
var openScore = 0
var questionCount = 0

var result = document.getElementById("result");
var displayResult = document.getElementById("show")
var restart = document.getElementById("restart")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById
("q5a2");






q1a1.addEventListener("click",open);
q1a2.addEventListener("click",optimistic);

q2a1.addEventListener("click",optimistic);
q2a2.addEventListener("click",open);

q3a1.addEventListener("click",open);
q3a2.addEventListener("click",optimistic);

q4a1.addEventListener("click",open);
q4a2.addEventListener("click",optimistic)

q5a1.addEventListener("click",optimistic)
q5a2.addEventListener("click",open)

restart.addEventListener("click", restartQuiz);

function optimistic(){
 optimisticScore += 1;
 questionCount += 1;

 console.log("questionCount = " + questionCount + "optimisticScore = " + optimisticScore);

 
 if (questionCount == 5) {
   console.log("Quiz over!") 
   updateResult();
  }
}




function open(){
  openScore += 1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + "openScore = " + openScore);


 if (questionCount == 5) {
   console.log("Quiz over!")
   updateResult();     
  }
}




function updateResult() {
    if (optimisticScore >=3) {
      result.innerHTML = "You are quite an optimistic person! People love you for the positivity you spread around and love to be around you!"
      console.log("You are quite an optimistic person! People love you for the positivity you spread around and love to be around you!");
    } else if (openScore >=3) {
      result.innerHTML = "You are an open-minded person! People enjoy being around you for your acceptingness and your calm presence!!"
      console.log("You are an open-minded person! People enjoy being around you for your acceptingness and your calm presence!!");
    }
}
function updateResult(){
  displayResult.addEventListener("click",display );
}
function display (){
    if (optimisticScore >=3) {
      result.innerHTML = "You are quite an optimistic person! People love you for the positivity you spread around and love to be around you!"
      console.log("You are quite an optimistic person! People love you for the positivity you spread around and love to be around you!");
    } else if (openScore >=3) {
      result.innerHTML = "You are an open-minded person! People enjoy being around you for your acceptingness and your calm presence!!"
      console.log("You are an open-minded person! People enjoy being around you for your acceptingness and your calm presence!!");
    }
}

function restartQuiz (){
 result.innerHTML = "You are a...";
 questionCount=0
 optimisticScore=0;
 openScore=0;
 console.log("questionCount = " + questionCount + "\t"+ "optimisticScore =" + optimisticScore + "\t" + "openScore = " + openScore );
}

q1a1.addEventListener("click",disableQ1);
q1a2.addEventListener("click",disableQ1);
q2a1.addEventListener("click",disableQ2);
q2a2.addEventListener("click",disableQ2);
q3a1.addEventListener("click",disableQ3);
q3a2.addEventListener("click",disableQ3);
q4a1.addEventListener("click",disableQ4);
q4a2.addEventListener("click",disableQ4);
q5a1.addEventListener("click",disableQ5);
q5a2.addEventListener("click",disableQ5);

function disableQ1(){
  q1a1.disabled =true;
  q1a2.disabled = true;
}
function disableQ2(){
  q2a1.disabled =true;
  q2a2.disabled = true;
}
function disableQ3(){
  q3a1.disabled =true;
  q3a2.disabled = true;
}
function disableQ4(){
  q4a1.disabled =true;
  q4a2.disabled = true;
}
function disableQ5(){
  q5a1.disabled =true;
  q5a2.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
}
