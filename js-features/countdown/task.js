document.addEventListener('DOMContentLoaded', function () {
  
    let seconds = 600;
  
    function formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
  
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      return formattedTime;
    }
  
    function updateTimer() {
      if (seconds > 0) {
        seconds--;
  
        document.getElementById('timer').textContent = formatTime(seconds);
  
        setTimeout(updateTimer, 1000);
      } else {
        alert('Вы победили в конкурсе!');
      }
    }

    updateTimer();
  });
  