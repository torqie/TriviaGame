$(document).ready(function() {

  $("#answers").delegate("li", "click", function () {
    console.log("Value: " + $(this).val());
    game.checkAnswer($(this).val());
  });
});