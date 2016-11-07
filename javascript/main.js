$(document).ready(function() {

  var finishLine = 900;
  var startLine = 0;
  var $car_one = $('.car_one');
  var $car_two = $('.car_two');
  var carOneWinner = $('.score_one');
  var carTwoWinner = $('.score_two');
  var carOneScore = 0;
  var carTwoScore = 0;

  $('button').click(function() {
    $('.car_one').css('left', '120px');
    $('.car_two').css('left', '120px');
  });

  $(document).keydown(function(e) {

    if (e.keyCode === 81) {
      $('.car_one').css('left', '+=10px');
      var car_one = $('.car_one').css('left');
      if ((parseInt(car_one, startLine) > finishLine)) {
        alert("Car One Wins!");
        carOneScore += 1;
        $(carOneWinner).html(carOneScore);
        }
    }

    if (e.keyCode === 80) {
      $('.car_two').css('left', '+=10px');
      var car_two = $('.car_two').css('left');
      if ((parseInt($car_two.css('left'), startLine) > finishLine)) {
        alert("Car Two Wins!");
        carTwoScore +=1;
        $(carTwoWinner).html(carTwoScore);
      }
    }
  });
});
