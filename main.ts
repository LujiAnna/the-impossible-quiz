"use strict";

// get DOM Elements
const question = document.getElementById('question');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const questionNumber = document.getElementById('question-number');

const questions = 'questions.json';

// Load a new question
async function newQuestion ()  {
  // fetch questions
  // error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
  const response = await fetch(questions);
  // get response
  // first parse the JSON so you have an actual object (JSON.parse())
  const data = await response.json();
  // display data
  console.log(data);
  console.log(data.quiz.random);
  console.log(data.quiz.random[0].q1.question);

  let arrQ = data.quiz.random;

  questionNumber!.textContent = `${1} out of 10 questions`;
    // change btn text to submit question. Avoid .innerText as it skips <>
    btn!.textContent = 'Submit Answer';
    // btn.innerHTML = 'Submit Answer';
    // btn.innerText = 'Submit Answer';
    (<HTMLInputElement>answer)!.value = '';
  
  // question!.textContent = `arrQ[${i}].q${i+1}.question`;
question!.textContent = arrQ[0].q1.question;
  }

// Listen to events
btn!.addEventListener('click', newQuestion);
