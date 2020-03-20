// Define Global Variables.

const game = {
  // Define Game Variables.
  timeLeft: 5,
  questionNumber: 0,
  currentQuestion: "",
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
      correctAnswer: "To code our lives away"
    },
    {
      question: "What is my favorite color?",
      answers: [
        "Green",
        "Blue",
        "Purple",
        "Orange"
      ],
      correctAnswer: "Blue"
    }
  ],

  // Define DIV Variables.
  timeRemainingText: document.getElementById("time-remaining"),
  questionText: document.getElementById("question"),
  answersText: document.getElementById("answers"),
  status: document.getElementById("status"),
  statusText: document.getElementById("status-text"),
  correctAnswerText: document.getElementById("correct-answer"),
  start: document.getElementById("start"),


  /** -- GAME FUNCTIONS -- **/
  // Initialize Function
  init() {
    this.reset();
  },

  // Reset The Game Values.
  reset() {
    this.timeLeft = 30;
    this.questionNumber = 0;
    this.currentQuestion = "";
    this.answersCorrect = 0;
    this.answersIncorrect = 0;
    this.answersUnanswered = 0;

    this.questionText = "";
    this.answersText = "";
    this.status.classList.add("d-none");
    this.statusText.textContent = "";
    this.correctAnswerText.textContent = "";
  },

  // Return Question with the answers in it
  getQuestion() {
    this.currentQuestion = this.questions[this.questionNumber];
    console.log("Question: " + this.currentQuestion);
  },

  // Start Timer
  timer(){
    this.start.classList.add("d-none");
    let gt = setInterval(function () {
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
        game.correctAnswerText.textContent = "Correct Answer is: ";
        // Show Next Question After 3 Seconds

        // Clear the Interval
        clearInterval(gt);
      }
      game.timeRemainingText.textContent = game.timeLeft;
      console.log(game.timeLeft);
      game.timeLeft--;
    }, 1000)
  },


  // Check Answer
  checkAnswer(userAnswer) {
    // If Answer Is Right
    if(userAnswer.toLowerCase() === this.currentQuestion.question.toLowerCase()) {
      // Increase answersCorrect
      this.answersCorrect++;
      // Display They Got Answer Correct
      // Show Next Question After 3 Seconds
    } else {
      // If Answer Is Wrong
      // Increase answersIncorrect
      this.answersIncorrect++;
      // Display They Got Answer Wrong
      // Show Next Question After 3 Seconds
    }



  },



};