// Define Global Variables.

const game = {
  // Define Game Variables.
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

  /** -- GAME FUNCTIONS -- **/
  // Initialize Function

  // Return Question

  // Return Answers

  // Start Timer
    // If Timer Runs Out
      // Increase answersUnanswered
      // Display To User Time Ran Out
      // Show Next Question After 3 Seconds

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