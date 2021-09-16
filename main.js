"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// get DOM Elements
const question = document.getElementById('question');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const questionNumber = document.getElementById('question-number');
const questions = 'questions.json';
let count = 0;
// Load a new question through an async request
function newQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        // fetch questions 
        // error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
        const response = yield fetch(questions);
        // get response
        // *first parse the JSON so you have an actual object (JSON.parse())
        const data = yield response.json();
        // display data
        console.log(data);
        console.log(data.quiz.random);
        console.log(data.quiz.random[0].question);
        let arrQ = data.quiz.random;
        // change btn text to submit question. Avoid .innerText as it skips <>
        btn.textContent = 'Submit Answer';
        // btn.innerHTML = 'Submit Answer';
        // btn.innerText = 'Submit Answer';
        answer.value = '';
        // https://stackoverflow.com/questions/62189176/how-can-i-create-a-button-that-increments-a-counter-when-clicked
        // arrQ.forEach((element :any, index :number)=> {
        //   console.log('element: ', element);
        //   console.log('index: ', index);
        // });
        // use return instead of break: (MDN) A break statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop
        if (count === 10) {
            return;
        }
        // instead of getting one question, loop through them from the json
        questionNumber.textContent = `${count + 1} out of 10 questions`;
        console.log(arrQ[count].question);
        question.textContent = arrQ[count].question;
        count++;
    });
}
;
// Listen to events
btn.addEventListener('click', newQuestion);
