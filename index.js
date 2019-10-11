var possibleAnswers = [
 "It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely",
 "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes",
  "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now",
 "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no",
 "My sources say no", "Outlook not so good", "Very doubtful"
];
var getAnswerButton = document.getElementById('get-your-answer-button');
var input  = document.getElementById('ask-your-question');
var main = document.querySelector('.main');
var main2 = document.querySelector('.main-2');


 function getAnswer() {
  var randomAnswer = possibleAnswers[Math.floor(Math.random() * 20)];
  document.querySelector('.random-answer').innerHTML = possibleAnswers[randomAnswer];
};


getAnswerButton.addEventListener('click', getRandomAnswer)

function getRandomAnswer() {
  main.classList.add('hidden');
  main2.classList.remove('hidden');
  document.querySelector('.their-question').innerHTML = input.value;
  getAnswer();


}
