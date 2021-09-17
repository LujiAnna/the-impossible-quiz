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
window.onload = function () {
    //your code here
    // get DOM Elements
    const question = document.getElementById('question');
    const btn = document.getElementById('btn');
    // const answer = document.getElementById('answer');
    const questionNumber = document.getElementById('question-number');
    const displayDiv = document.getElementById("display");
    displayDiv.className = "form-check";
    const questions = 'questions.json';
    let count = 0;
    // Load a new question through an async request
    function newQuestion() {
        return __awaiter(this, void 0, void 0, function* () {
            // if it exists, remove(inputAnswer);
            if (document.getElementById('answer') !== null) {
                document.getElementById('answer').remove();
            }
            //  if(document.querySelector('.form-check-input')!.classList!.contains("form-check-input")) { // Get element from DOM
            //   // document.querySelector('form-check-input')!.classList!.remove('form-check-input') // Remove class "form-check-input"
            // }
            // http://staff.washington.edu/weller/css/DOM2.html
            if (document.getElementsByTagName('input') !== null) {
                //   document.getElementById('answer-form')!.remove();
                console.log('found');
            }
            // fetch questions 
            // error chrome: https://stackoverflow.com/questions/49971575/chrome-fetch-api-cannot-load-file-how-to-workaround
            const response = yield fetch(questions);
            // get response
            // *first parse the JSON so you have an actual object (JSON.parse())
            const data = yield response.json();
            // display data
            // console.log(data);
            // console.log(data.quiz.random);
            // console.log(data.quiz.random[0].question);
            let arrQ = data.quiz.random;
            // change btn text to submit question. Avoid .innerText as it skips <>
            btn.textContent = 'Submit Answer';
            // btn.innerHTML = 'Submit Answer';
            // btn.innerText = 'Submit Answer';
            // (<HTMLInputElement>answer)!.value = '';
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
            //  console.log(arrQ[count].question);
            question.textContent = arrQ[count].question;
            //  Display answer choices
            // for type text | string | number | array, use the input box
            let answerType = arrQ[count].type;
            if (answerType === 'string' || answerType === 'number' || answerType === 'array' || answerType === 'text') {
                // console.log(arrQ[count].type);
                // create a new input type text element
                const newEl = document.createElement("input");
                // set type and CSS class
                newEl.setAttribute("type", "text");
                newEl.setAttribute("placeholder", "type answer");
                newEl.setAttribute("id", "answer");
                newEl.setAttribute("value", "");
                newEl.className = "form-control";
                // document.body is not the parent, it's far up in the DOM hierarchy
                let parentDiv = document.getElementById("answer-form");
                // add the newly created element and its content into the DOM
                // parentDiv!.insertBefore(newEl, displayDiv!.nextSibling);
                // https://www.stevesouders.com/blog/2010/05/11/appendchild-vs-insertbefore/
                parentDiv.parentNode.insertBefore(newEl, parentDiv);
            }
            if (answerType === 'boolean' || answerType === 'single-select') {
                console.log(arrQ[count].type);
                console.log(arrQ[count].options); // is an array
                let arrOptions = arrQ[count].options;
                arrOptions.forEach((element, index) => {
                    // create a new input type radio element
                    const newEl = document.createElement("input");
                    // create a new input type radio label for text
                    const newLab = document.createElement("label");
                    // console.log('element: ', element);
                    // console.log('index: ', index);
                    // and give it some content
                    // let content = arrOptions[index];
                    const newContent = document.createTextNode(element);
                    // console.log(newContent);
                    // set type and CSS class
                    newEl.setAttribute("type", "radio");
                    newEl.setAttribute("name", "selection");
                    newEl.setAttribute("value", element);
                    newEl.setAttribute("id", index.toString());
                    newEl.className = "form-check-input";
                    newLab.setAttribute("for", index.toString());
                    newLab.innerHTML = element;
                    newLab.className = "form-check-label";
                    // add the text node to the newly created div
                    // newEl?.appendChild(newLab);
                    // console.log(newEl);
                    // add the newly created element and its content into the DOM
                    // displayDiv!.appendChild(newEl);
                    // https://stackoverflow.com/questions/62245350/how-to-create-textnode-for-radio-button-with-js
                    let parentDiv = document.getElementById("answer-form");
                    parentDiv.parentNode.insertBefore(newEl, parentDiv);
                    parentDiv.parentNode.insertBefore(newLab, parentDiv);
                }); // close forEach
                // document.body.insertBefore(newEl, displayDiv);
                // parentDiv!.insertBefore(newEl, displayDiv!.nextSibling);
            }
            ; // close if
            // go to the next question
            count++;
        });
    }
    ;
    // Listen to events
    btn.addEventListener('click', newQuestion);
};
