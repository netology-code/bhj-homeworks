const countDownElem = document.getElementById('timer');
// const updateTimer = setInterval(function () {
//      if (countDownElem.innerHTML > 0) {
//          countDownElem.innerHTML--;
//      } else {
//          clearInterval();
//          alert('Вы победили!');
//      }
// }, 1000);

//Задание 1.1
// let time = new Date('April 13 2022 00:00:00');
//
// function updateTimerFunc () {
//     let nowDate = new Date();
//     let resultDate = time - nowDate;
//     let hour = Math.floor(resultDate / 1000 / 60 / 60) % 24;
//     let minutes = Math.floor(resultDate / 1000 / 60) % 60;
//     let seconds = Math.floor(resultDate / 1000) % 60;
//     hour = hour < 10 ? '0' + hour:
//         hour;
//     minutes = minutes < 10 ? '0' + minutes:
//         minutes;
//     seconds = seconds < 10 ? '0' + seconds:
//         seconds;
//     countDownElem.innerHTML = `${hour}:${minutes}:${seconds}`;
//     }
// setInterval(updateTimerFunc, 1000);

//Задача 1.2

const updateTimer = setInterval(function () {
     if (countDownElem.innerHTML > 0) {
         countDownElem.innerHTML--;
     } else {
         clearInterval();
         window.location.href = 'https://www.youtube.com/watch?v=KneXJhX4Duk';
     }
}, 1000);