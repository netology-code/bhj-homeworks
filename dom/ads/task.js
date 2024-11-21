const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    const changeCase = () => {
        cases[activeIndex].classList.remove('rotator__case_active');

        activeIndex = (activeIndex + 1) % cases.length;

        cases[activeIndex].classList.add('rotator__case_active');

        cases[activeIndex].style.color = cases[activeIndex].dataset.color;
    };

    const speed = cases[activeIndex].dataset.speed;
    setInterval(changeCase, speed);
});
