"use strict";

// get DOM Elements
const question = document.getElementById('question');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');

const questions = 'questions.json';

// Load a new question
async function newQuestion (i :any)  {
  //   fetch questions
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
 
  question!.textContent = `arrQ[i].q${i+1}.question`;
  }

const getQuestion = () => {    
  //   console.log('Hello World!!');
  // loop through a number of questions (1 through 10)
  for (let i = 0; i < 10; i++) {
    newQuestion(i);
  }
  //   change btn text to submit question. Avoid .innerText as it skips <>
  btn!.textContent = 'Submit Answer';
  // btn.innerHTML = 'Submit Answer';
  // btn.innerText = 'Submit Answer';
  (<HTMLInputElement>answer)!.value = '';
}

// getQuestion();

// Listen to events
btn!.addEventListener('click', getQuestion);

// TODO: switch to tsx - last one for today, then move into another thing

// TOMORROW - Day 2
// TODO: Display different questions by looping through them
// TODO: Verify questions
// TODO: Give feedback to user
// TODO: Add hint
// TODO: Create different types of answers
// TODO: Store values in the database - skip for now
