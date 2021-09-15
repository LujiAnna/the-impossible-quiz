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
const questions = 'questions.json';
// Load question
function newQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        //   fetch questions
        // error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
        const response = yield fetch(questions);
        // get response
        // first parse the JSON so you have an actual object (JSON.parse())
        const data = yield response.json();
        // display data
        console.log(data);
        console.log(data.quiz.random);
        console.log(data.quiz.random[0].q1.question);
        let arrQ = data.quiz.random;
        question.textContent = arrQ[0].q1.question;
    });
}
const getQuestion = () => {
    //   console.log('Hello World!!');
    newQuestion();
    //   change btn text to submit question. Avoid .innerText as it skips <>
    btn.textContent = 'Submit Answer';
    // btn.innerHTML = 'Submit Answer';
    // btn.innerText = 'Submit Answer';
    answer.value = '';
};
// getQuestion();
// Listen to events
btn.addEventListener('click', getQuestion);
