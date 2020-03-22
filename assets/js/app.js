$(document).ready(function() {

  $("#answers").delegate("li", "click", function () {
    console.log("Value: " + $(this).val());
    game.checkAnswer($(this).val());
  });

  $("#restart").on("click", function() {
    console.log("Restarting Game");
    game.restart();
  });
});