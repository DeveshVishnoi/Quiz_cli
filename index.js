var import_n = require("readline-sync");
console.log("Do you Know me Quiz")

var username = import_n.question("Enter your Name Please\n");

console.log("Welcome " + username.toUpperCase() + " , Do you know Devesh Quiz?")

console.log("\nThere are Total Five Question....." + "\nFor Each correct Answer, You will get 10 Points...." +"\nFor each Wrong Answer 5 Point will be Deducted.......");

console.log("\n==================================== ")

var question_list = [
  {
    question:"Where Do I Live?\n",
    answer:"Kanpur"
  },
  {
    question:"What is My Age?\n",
    answer:"20"
  },
  {
    question:"In Which City Is My COllege?\n",
    answer:"Kanpur"
  },
  {
    question:"What is My Favourite Food?\n",
    answer:"Dosa"
  },
  {
    question:"What is My Favourite Fruit?\n",
    answer:"Mango"
  },
]

var score = 0;
var j = 1;
for(var i = 0;i < question_list.length;i++){
  console.log("Question Number : "+ j++ +"\n");
  playgame(question_list[i].question, question_list[i].answer)
}
console.log("Your Final Score Is " + score + "\n Thank You For Taking The Quiz")

if (score === 50) {
  console.log("You Know Devesh Very Well");
}
if (score < 0) {
  console.log("Sorry");
}

function playgame(question, answer){
  var userans = import_n.question(question);
  //console.log(userans);
  if(userans.toUpperCase() === answer.toUpperCase()){
    console.log("\You are Right");
    score = score + 10;
    console.log("Your Current Score :" + score);
    console.log("\n==================================== ")
  }
  else{
    console.log("\nYou are Wrong");
    score = score -5;
    console.log("Your Current Score :" + Score);
    console.log("\n==================================== ")
  }
}
