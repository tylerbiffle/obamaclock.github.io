// script.js
document.getElementById('startButton').addEventListener('click', function() {
  var seconds = 60; // for example, 1 minute
  var minutesElement = document.getElementById('minutes');
  var secondsElement = document.getElementById('seconds');

  function updateTimer() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(remainingSeconds).padStart(2, '0');

    if (seconds === 0) {
      alert('Timer is done!');
    } else {
      seconds--;
    }
  }

  updateTimer();
  var countdown = setInterval(updateTimer, 1000);

  // When the timer reaches 0, clear the interval
  setTimeout(function() {
    clearInterval(countdown);
  }, seconds * 1000 + 100); // extra 100ms to ensure the last second is counted
});
