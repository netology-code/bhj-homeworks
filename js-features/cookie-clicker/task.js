const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let clickCount = 0;

cookie.onclick = () => {
    clickCount++
    clickerCounter.textContent = clickCount;
    cookie.src = "https://i.postimg.cc/T1bWdf2y/1024px-Pepperidge-Farm-Nantucket-Cookie.jpg";
    if (clickCount % 2 == 0){
        cookie.width -= 200;
    }  else {   
        cookie.width += 200;
    }
}