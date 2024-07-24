let timer = document.getElementById('timer');
let downloadLink = 'https://drive.google.com/uc?export=download&id=1DeKTA4EGozpCG_Sdwp1-kZ_mQzyqLqtJ';
const arrayTimer = Array.of('00', '00', '10');
 
timer.innerText = arrayTimer[0] + ':' + arrayTimer[1] + ':' + arrayTimer[2];

startTimer()

function startTimer(){

    timer.innerText = arrayTimer[0] + ':' + arrayTimer[1] + ':' + arrayTimer[2]
    
    if (arrayTimer[2] > 0){
        arrayTimer[2]--;
        if ((String(arrayTimer[2]).length !== 2)) {
            arrayTimer[2] = '0' + arrayTimer[2]
        }
    } else {
        arrayTimer[2] = 59;
        if (arrayTimer[1] > 0) {
            arrayTimer[2] = 59;
            arrayTimer[1]--;
            if ((String(arrayTimer[1]).length !== 2)) {
                arrayTimer[1] = '0' + arrayTimer[1]
            }
        } else {
            arrayTimer[1] = 59
            if (arrayTimer[0] > 0) {
                arrayTimer[1] = 59;
                arrayTimer[0]--;
                if ((String(arrayTimer[0]).length !== 2)) {
                    arrayTimer[0] = '0' + arrayTimer[0]
                }
            } else {
                window.location.href = downloadLink
                alert('Вы победили в конкурсе! Подождите, для получения приза!')
                return;
            } 
        }
    }

    setTimeout(startTimer, 1000)
}
