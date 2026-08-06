const startingSeconds = parseInt(document.getElementById("timer").innerText);

function updateTimer() {
  let currentSeconds = parseInt(document.getElementById("timer").innerText);

  if (currentSeconds > 0) {
    currentSeconds--;
    document.getElementById("timer").innerText = currentSeconds;

    setTimeout(updateTimer, 1000);
  } else {
    alert("Вы победили в конкурсе!");
  }
}

updateTimer();
