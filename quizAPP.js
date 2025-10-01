const questions = [
      {
        question: "What does DOM stand for?",
        choices: [
          "Document Object Model",
          "Data Object Management",
          "Digital Ordinance Model",
          "Desktop Oriented Mode"
        ],
        correctAnswer: 0
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
      },
      {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        choices: ["push()", "pop()", "append()", "add()"],
        correctAnswer: 0
      }
    ];
    //finding elements bt id and storing in variables
    const question =document.getElementById("question-id");
    const answerButtons =document.querySelectorAll(".buttons");
    const feedBack = document.getElementById("feed-back");
    const nextQuestion = document.getElementById("next-question");
    const scoreElement =document.getElementById("score");
    let currentQuestionIndex = 0;
    let score = 0;
    //function to display question and choices
    function displayQuestion(currentQuestionIndex){
    let currentQuestion = questions[currentQuestionIndex]
    question.textContent=currentQuestion.question;
    feedBack.textContent="";
    answerButtons.forEach((btn ,i )=>{
        btn.textContent = currentQuestion.choices[i];
        btn.disabled=false;
    });
}
     //addEventListener to answerButtons for selected answer
    answerButtons.forEach((btn ,index )=>{
        btn.addEventListener("click",()=> handleAnswer(index));
    });
    function handleAnswer(selectedIndex){
                const correctIndex=questions[currentQuestionIndex].correctAnswer;
            if (selectedIndex === correctIndex){
                feedBack.textContent ="correct";
                score++;
            }
            else{
                feedBack.textContent ="incorrect";
            }
            answerButtons.forEach(btn=>btn.disabled=true);//disable buttons after selection
        }
        //});//feedBack.textContent="";
//displayQuestion(currentQuestionIndex);
//addEventListener to nextQuestion
    nextQuestion.addEventListener("click",()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
        displayQuestion(currentQuestionIndex);
        }
        else{
            question.textContent = "Quiz Finished!";
    feedBack.textContent = "";
    scoreElement.textContent = `You got ${score} out of ${questions.length}`;
    answerButtons.forEach(btn => {
      btn.style.display = "none"; // optionally hide buttons
    });
    nextQuestion.disabled = true; // disable next button after quiz ends
  }
});
   //Initial function call
    displayQuestion(currentQuestionIndex);





