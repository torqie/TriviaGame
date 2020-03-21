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
      question: "In S1E1 \"Pilot\": Who started their first day at Dunder Mifflin Scranton?",
      answers: [
        "Jim Halpert",
        "Ryan Howard",
        "Michael Scott",
        "Erin Hannon"
      ],
      correctAnswerIndex: 1,
      image: "https://media.giphy.com/media/g6yDMd9nBE4Ny/giphy.gif"
    },
    {
      question: "In S1E2 \"Diversity Day\": What famous comedian's stand up routine does Michael imitate?",
      answers: [
        "Chris Rock",
        "Richard Pryor",
        "Robin Williams",
        "George Carlin"
      ],
      correctAnswerIndex: 0,
      image: "https://media.giphy.com/media/jOpLbiGmHR9S0/giphy.gif"
    },
    {
      question: "In S1E3 \"Health Care\": Which of these is NOT one of Jim and Pam's made up diseases?",
      answers: [
        "Killer nanorobots",
        "Hot dog fingers",
        "Spontaneous dental hydroplosion",
        "Hair Cancer"
      ],
      correctAnswerIndex: 3,
      image: "https://media.giphy.com/media/muGYyrWwxOOMo/giphy.gif"
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
    this.timeLeft = 30;
    this.gameTimer = 30;
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

  // Start The Timer
  startTimer() {
    this.start.classList.add("d-none");
    this.gameTimer = setInterval(function () {
      // Decrement the time left
      game.timeLeft--;
      // If Timer Runs Out
      if(game.timeLeft <= 0) {
        //Ran out of time
        game.timesUp();
      }
      game.timeRemainingText.textContent = game.timeLeft;
    }, 1000);
  },
  // Stop The Timer
  stopTimer() {
    clearInterval(this.gameTimer);
  },

  // What to do when they run out of time
  timesUp() {
    // Increase answersUnanswered
    game.answersUnanswered++;
    // Hide The Answers Block
    game.answersText.classList.add("d-none");
    // Show The Status Block
    game.status.classList.remove("d-none");
    // Display To User Time Ran Out
    game.statusText.textContent = "Time Ran Out!";
    game.correctAnswerText.textContent = "Correct Answer is: " + game.currentQuestion.answers[game.currentQuestion.correctAnswerIndex];
    game.statusImage.src = game.currentQuestion.image;
    // Clear the Interval
    game.stopTimer();
    // Show Next Question After 3 Seconds
    setTimeout(game.nextQuestion, 3000);

  },

  // Check Answer
  checkAnswer(userAnswer) {
    this.answersText.classList.add("d-none");
    this.status.classList.remove("d-none");
    this.stopTimer();

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

  // Get the Next Question
  nextQuestion() {
    console.log("Question #: " + game.questionNumber);
    console.log("Questions Len: " + game.questions.length);
    if(game.questionNumber < game.questions.length) {

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
      game.startTimer();
    } else {
      game.ending();
    }
  },

  // Displays the answers on the screen
  displayAnswers(answers) {
    for(let i = 0; i < answers.length; i++) {
      var li = document.createElement('li');
      li.value = i;
      li.textContent = answers[i];
      document.getElementById("answers").appendChild(li);
    }
  },

  // What happens when you get to the end of the questions
  ending(){
    document.getElementById("inner-game").classList.add("d-none");
    const ending = document.getElementById("ending");
    // TODO:: update the divs with the ending values.
  }

};