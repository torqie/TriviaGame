// Define Global Variables.

const game = {
  // Define Game Variables.
  timeLeft: 5,
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


  /** -- GAME FUNCTIONS -- **/
  // Initialize Function
  init() {
    this.reset();
  },

  // Reset The Game Values.
  reset() {
    this.timeLeft = 30;
    this.answersCorrect = 0;
    this.answersIncorrect = 0;
    this.answersUnanswered = 0;

    this.questionText = this.getQuestion();
    this.answersText = this.getAnswers();
    this.status.classList.add("d-none");
    this.statusText.textContent = "";
    this.correctAnswerText.textContent = "";
  },

  // Return Question
  getQuestion() {

  },

  // Return Answers
  getAnswers() {

  },

  // Start Timer
  timer(){

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
      game.timeLeft--;
    }, 1000)
  }


  // Check Answer

  // If Answer Is Right
    // Increase answersCorrect
    // Display They Got Answer Correct
    // Show Next Question After 3 Seconds

  // If Answer Is Wrong
    // Increase answersIncorrect
    // Display They Got Answer Wrong
    // Show Next Question After 3 Seconds

};