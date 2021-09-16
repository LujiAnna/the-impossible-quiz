"use strict";

// get DOM Elements
const question = document.getElementById('question');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const questionNumber = document.getElementById('question-number');

const questions = 'questions.json';

let count = 0;
// Load a new question through an async request
async function newQuestion ()  {
  // fetch questions 
  // error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
  const response = await fetch(questions);
  // get response
  // *first parse the JSON so you have an actual object (JSON.parse())
  const data = await response.json();
  // display data
  console.log(data);
  console.log(data.quiz.random);
  console.log(data.quiz.random[0].question);

  let arrQ = data.quiz.random;

    // change btn text to submit question. Avoid .innerText as it skips <>
    btn!.textContent = 'Submit Answer';
    // btn.innerHTML = 'Submit Answer';
    // btn.innerText = 'Submit Answer';
    (<HTMLInputElement>answer)!.value = '';
  
  // https://stackoverflow.com/questions/62189176/how-can-i-create-a-button-that-increments-a-counter-when-clicked
  // arrQ.forEach((element :any, index :number)=> {
  //   console.log('element: ', element);
  //   console.log('index: ', index);
  // });

  // use return instead of break: (MDN) A break statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop
 if (count === 10){
    return;
  }

  // instead of getting one question, loop through them from the json
   questionNumber!.textContent = `${count+1} out of 10 questions`;
   console.log(arrQ[count].question);
   question!.textContent = arrQ[count].question;
  count++;
  };

// Listen to events
btn!.addEventListener('click', newQuestion);

