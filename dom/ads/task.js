// вариант1
const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArray = Array.from(rotatorCase);
let delay = 1000;



const infinityRotator = rotatorCaseArray.forEach((el, index) => {
    setInterval(() => {
        el = document.querySelector('.rotator__case_active');
        const nextItem = el.nextElementSibling;
        const parent = el.closest('.rotator');
    
        el.classList.remove('rotator__case_active');
    
            if (nextItem !== null) {
                nextItem.classList.add('rotator__case_active')
            } else {
                parent.firstElementChild.classList.add('rotator__case_active');
            }
        }, index * delay)
})


// вариант2
    // function rotatorFunc() {
    //     rotatorCaseArray.forEach(el => {
    //         el = document.querySelector('.rotator__case_active');
    //         const nextItem = el.nextElementSibling;
    //         const parent = el.closest('.rotator');

    //         el.classList.remove('rotator__case_active');
    
    //         if (nextItem !== null) {
    //             nextItem.classList.add('rotator__case_active');
    //         } else {
    //             parent.firstElementChild.classList.add('rotator__case_active');
    //         }
    //     }) 
    // }

    // const interval = setInterval(rotatorFunc, delay)



// вариант 3
// class Rotator {
//     constructor(name, nextName, parent, array, timerId = null) {
//         this.name = document.querySelector('.rotator__case_active');
//         this.nextName = this.name.nextElementSibling;
//         this.parent = this.name.closest('.rotator');
//         this.array = document.querySelectorAll('.rotator__case');
//     }

//     rotation(el) {
//         this.name.classList.remove('rotator__case_active');
//         if (this.nextName !== null) {
//             this.nextName.classList.add('rotator__case_active');
//         } else {
//             this.parent.firstElementChild.classList.add('rotator__case_active');
//         }
//     }

//     infinityRotation() {
//         if (this.timerId === null) {
//             timerId = setInterval(() => this.array.forEach(el => this.rotation(el)), 1000);
//         }
//     }
// }








    // вариант 4
    // let caseActiveIndex = rotatorCaseArray.findIndex(el => el.classList.contains('rotator__case_active'));
    // rotatorCaseArray[caseActiveIndex].classList.remove('rotator__case_active');

    // caseActiveIndex++;
    // if (caseActiveIndex > rotatorCaseArray.length - 1) {
    //     caseActiveIndex = 0;
    // }
    // rotatorCaseArray[caseActiveIndex].classList.add('rotator__case_active');
    // rotatorCaseArray.forEach(el => {
    //     if (el.classList.contains('rotator__case_active')) {
    //         let color = el.dataset.color;
    //         el.style.color = color;
    //         let speed = el.dataset.speed;
    //     }
    // })


