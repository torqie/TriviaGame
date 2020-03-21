// Define Global Variables.

const game = {
  // Define Game Variables.
  timeLeft: 0,
  gameTimer: 0,
  questionNumber: 0,
  currentQuestion: {},
  answersCorrect: 0,
  answersIncorrect: 0,
  answersUnanswered: 0,

  questions: [
    {
      question: "What are we doing here?",
      answers: [
        "I have no idea",
        "To save the WORLD",
        "To code our lives away",
        "To get a life"
      ],
      correctAnswerIndex: 2,
      image: "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
    },
    {
      question: "What is my favorite color?",
      answers: [
        "Green",
        "Blue",
        "Purple",
        "Orange"
      ],
      correctAnswerIndex: 1
    }
  ],

  // Define DIV Variables.
  timeRemainingText: document.getElementById("time-remaining"),
  questionText: document.getElementById("question"),
  answersText: document.getElementById("answers"),
  status: document.getElementById("status"),
  statusText: document.getElementById("status-text"),
  statusImage: document.getElementById("status-image"),
  correctAnswerText: document.getElementById("correct-answer"),
  start: document.getElementById("start"),


  /** -- GAME FUNCTIONS -- **/
  // Initialize Function
  init() {
    this.gameReset();
    this.nextQuestion();
  },

  questionReset() {
    this.timeLeft = 5;
    this.gameTimer = 5;
    this.currentQuestion = "";
    this.questionText.textContent = "";
    this.answersText.innerHTML = "";
    this.status.classList.add("d-none");
    this.answersText.classList.remove("d-none");
    this.statusText.textContent = "";
    this.correctAnswerText.textContent = "";
    this.timeRemainingText.textContent = this.timeLeft;
  },

  // Reset The Game Values.
  gameReset() {
    this.questionReset();
    this.questionNumber = 0;
    this.answersCorrect = 0;
    this.answersIncorrect = 0;
    this.answersUnanswered = 0;
  },

  // Return Question with the answers in it
  getQuestion() {
    this.currentQuestion = this.questions[this.questionNumber];
    this.questionNumber++;
    console.log("Question: " + this.currentQuestion.question);
  },

  // Start Timer
  timer() {
    this.start.classList.add("d-none");
    this.gameTimer = setInterval(function () {
      // Decrement the time left
      game.timeLeft--;
      // If Timer Runs Out
      if(game.timeLeft <= 0) {

        // Increase answersUnanswered
        game.answersUnanswered++;
        // Hide The Answers Block
        game.answersText.classList.add("d-none");
        // Show The Status Block
        game.status.classList.remove("d-none");
        // Display To User Time Ran Out
        game.statusText.textContent = "Time Ran Out!";
        game.correctAnswerText.textContent = "Correct Answer is: " + game.currentQuestion.correctAnswer;
        game.statusImage.src = game.currentQuestion.image;
        // Show Next Question After 3 Seconds
        setTimeout(game.nextQuestion, 3000);

        // Clear the Interval
        clearInterval(game.gameTimer);
      }
      game.timeRemainingText.textContent = game.timeLeft;
      console.log("Time Left: " + game.timeLeft);

    }, 1000)
  },

  // Check Answer
  checkAnswer(userAnswer) {
    this.answersText.classList.add("d-none");
    this.status.classList.remove("d-none");
    clearInterval(this.gameTimer);

    // CHeck if userAnswer matches the
    if(parseInt(userAnswer) === parseInt(this.currentQuestion.correctAnswerIndex)) {
      // -- If Answer is right -- //
      // Increase answersCorrect
      this.answersCorrect++;
      console.log("Answers Correct: " + this.answersCorrect);
      // Display They Got Answer Correct
      this.statusText.textContent = "Correct!";
    } else {
      // -- If Answer Is Wrong -- //
      // Increase answersIncorrect
      this.answersIncorrect++;
      console.log("Answers Incorrect: " + this.answersIncorrect);
      // Display They Got Answer Wrong
      this.statusText.textContent = "Incorrect!";
      // Show Next Question After 3 Seconds
    }
    setTimeout(game.nextQuestion, 3000);
  },

  nextQuestion() {
    //Reset all values dealing with the last question
    game.questionReset();
    //Get a question
    game.getQuestion();
    // Show The question.
    game.questionText.textContent = game.currentQuestion.question;
    //Show the answers
    game.displayAnswers(game.currentQuestion.answers);
    game.answersText.classList.remove("d-none");
    // Start the timer
    game.timer();
  },

  displayAnswers(answers) {
    for(let i = 0; i < answers.length; i++) {
      var li = document.createElement('li');
      li.value = i;
      li.textContent = answers[i];
      document.getElementById("answers").appendChild(li);
    }
  }

};