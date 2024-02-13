function timeElapse(c) {
  var targetDate = new Date("October 9, 2022");
  var currentDate = new Date();
  var elapsedTime = (currentDate - targetDate) / 1000;

  var days = Math.floor(elapsedTime / (3600 * 24));
  var hours = Math.floor((elapsedTime % (3600 * 24)) / 3600);
  var minutes = Math.floor((elapsedTime % 3600) / 60);
  var seconds = Math.floor(elapsedTime % 60);

  // Adjust days if needed

  // Format numbers with leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var output =
    '<span class="digit">' +
    days +
    "</span> days " +
    '<span class="digit">' +
    hours +
    "</span> hours " +
    '<span class="digit">' +
    minutes +
    "</span> minutes " +
    '<span class="digit">' +
    seconds +
    "</span> seconds ❤️";

  $("#elapseClock").html(output);
}
