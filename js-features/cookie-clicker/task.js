let clickCount = 0;
const cookieElement = document.getElementById('cookie');
const clickCountElement = document.getElementById('click-count');
let lastClickTime = new Date();

cookieElement.addEventListener('click', () => {
    clickCount++;
    clickCountElement.innerText = `Количество кликов: ${clickCount}`;

    const currentTime = new Date();
    const timeDifference = (currentTime - lastClickTime) / 1000;
    const clickSpeed = 1 / timeDifference;
    document.getElementById('click-speed').innerText = `Скорость клика: ${clickSpeed.toFixed(2)} кликов в секунду`;

    lastClickTime = currentTime;

    if (clickCount % 2 === 0) {
        cookieElement.style.width = '100px';
        cookieElement.style.height = '100px';
    } else {
        cookieElement.style.width = '80px';
        cookieElement.style.height = '80px';
    }
});
