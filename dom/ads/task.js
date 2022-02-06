const rotator__case = document.getElementsByClassName('rotator__case');
rotator__case.className = 'rotator__case_active';

function toggleClass() {
    rotator__case.classList.toggle('rotator__case_active');
}

for(const element of rotator__case) {
    setInterval(toggleClass, 1000);
}


