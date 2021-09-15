"use strict";

// get DOM Elements
const question = document.getElementById('question');
const btn = document.getElementById('btn');

const questions = 'questions.json';

async function getQuestion() {    
//   console.log('Hello World!!');
//   fetch questions
// error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
  const response = await fetch(questions);
//   get response
// first parse the JSON so you have an actual object (JSON.parse())
  const data = await response.json();
// display data
  console.log(data);

//   change btn text to submit question. Avoid .innerText as it skiks <>
btn.textContent = 'Submit Answer';
// btn.innerHTML = 'Submit Answer';
// btn.innerHTML = 'Submit Answer';
}

// getQuestion();

// Listen to events
btn.addEventListener('click', getQuestion);

// TODO: change btn text from Get Question to Submit Answer
// TODO: Display different questions
// TODO: Verify questions
// TODO: Give feedback to user
// TODO: Add hint
// TODO: Create different types of answers
// TODO: Store values in the database - skip for now
