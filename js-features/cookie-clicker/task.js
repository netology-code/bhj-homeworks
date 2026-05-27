document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');

    const counter = new Counter();

    cookie.addEventListener('click', () => {
        counter.plusClick();
    });
});

class Counter {
    constructor() {
        this.clicksCounter = document.getElementById('clicker__counter');
        this.countSpeedElement = document.getElementById('clicker__avg');
        this.clicksCount = Number(this.clicksCounter.innerText);
        this.prevClickTime = null;
        this.currentClickTime = null;
    }

    plusClick() {
        this.currentClickTime = new Date();
        this.clicksCount = this.clicksCount + 1;
        this.clicksCounter.innerText = this.clicksCount;
        this.updateClickAvg();
        this.prevClickTime = this.currentClickTime;
    }

    updateClickAvg() {
        if (!this.prevClickTime) {
            return;
        }

        const diff = (this.currentClickTime.getTime() - this.prevClickTime.getTime()) / 1000;
        this.countSpeedElement.innerText = (1 / diff).toFixed(2);
    }
}
