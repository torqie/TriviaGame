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
    },
    {
      question: "In the pilot episode, how many years did Michael say he worked at Dunder Mifflin?",
      answers: [
        "10",
        "11",
        "12",
        "14"
      ],
      correctAnswerIndex: 2,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-02/25/19/enhanced/3b12ac43a57b/enhanced-475-1582658676-12.png"
    },
    {
      question: "What item of Michael's did Jim put into jello?",
      answers: [
        "Stapler",
        "Desk Nameplate",
        "Mug",
        "Pen"
      ],
      correctAnswerIndex: 2,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-01/22/4/enhanced/dff4b266d51f/enhanced-919-1579666255-1.jpg"
    },
    {
      question: "What game does Angela tell Pam that she likes to play in the office?",
      answers: [
        "Jim Ball",
        "Pam Pong",
        "Cat Charades",
        "Michael Monopoly"
      ],
      correctAnswerIndex: 1,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-02/25/19/enhanced/dc5c4495fbfe/enhanced-621-1582658883-2.jpg"
    },
    {
      question: "What is Michael’s middle name?",
      answers: [
        "Kurt",
        "Lee",
        "Jerry",
        "Gary"
      ],
      correctAnswerIndex: 3,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-02/25/19/enhanced/8297aca676b1/enhanced-620-1582659017-4.jpg"
    },
    {
      question: "What was Jim's official title at the Stamford branch?",
      answers: [
        "Director of Sales",
        "Assistant Regional Manager",
        "Head of Sales",
        "Assistant to the Regional Manager"
      ],
      correctAnswerIndex: 1,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-01/22/4/enhanced/87851ffa7b24/enhanced-932-1579667054-1.jpg"
    },
    {
      question: "What word did Dwight have taped to his forehead in the \"Diversity Day\" episode?",
      answers: [
        "Asian",
        "Black",
        "Jewish",
        "Indian"
      ],
      correctAnswerIndex: 0,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-01/22/4/enhanced/dff4b266d51f/enhanced-919-1579667408-5.jpg"
    },
    {
      question: "On what day did Ryan and Kelly first hook up?",
      answers: [
        "February 12th",
        "February 13th",
        "February 14th",
        "February 15th"
      ],
      correctAnswerIndex: 1,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-01/22/4/enhanced/6bae1359bd61/enhanced-939-1579667787-1.jpg"
    },
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
    document.getElementById("inner-game").classList.remove("d-none");
    document.getElementById("ending").classList.add("d-none");
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

  restart() {
    this.start.classList.remove('d-none');
    this.gameReset();
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
      game.statusImage.src = game.currentQuestion.image;
    } else {
      // -- If Answer Is Wrong -- //
      // Increase answersIncorrect
      this.answersIncorrect++;
      console.log("Answers Incorrect: " + this.answersIncorrect);
      // Display They Got Answer Wrong
      this.statusText.textContent = "Incorrect!";
      game.correctAnswerText.textContent = "Correct Answer is: " + game.currentQuestion.answers[game.currentQuestion.correctAnswerIndex];
      game.statusImage.src = game.currentQuestion.image;
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
    // update the divs with the ending values.
    document.getElementById("ending-correct").textContent = this.answersCorrect;
    document.getElementById("ending-incorrect").textContent = this.answersIncorrect;
    document.getElementById("ending-unanswered").textContent = this.answersUnanswered;
    document.getElementById("ending").classList.remove("d-none");
  }

};