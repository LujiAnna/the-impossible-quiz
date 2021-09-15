"use strict";
function hello() {
    console.log('Hello World!!');
    fetch('https://quizapi.io/api/v1/questions -G \
-d apiKey=YOUR_API_KEY \')
  .then(response => response.json())
  .then(data => console.log(data));
}
hello();

(()=>{
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
})



// TODO: Move page to display different questions
// TODO: Verify questions
// TODO: Give feedback to user
// TODO: Add hint
// TODO: Create different types of answers