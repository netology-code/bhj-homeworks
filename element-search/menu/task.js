const menu_sub = document.getElementsByClassName('menu_sub');
let arr_sub = Array.from(menu_sub);


for(let sub of arr_sub) {
    const links = sub.closest('li').querySelectorAll('a');
    let arr_links = Array.from(links);
    for(let link of arr_links) {
        link.onclick = function() {
            if(sub.classList.contains('menu_active')) {
                sub.classList.remove('menu_active');
                return false;
            }
            else if(arr_sub.some(elem => elem.contains('menu_active'))) {
                arr_sub[indexOf(elem => elem.contains('menu_active'))].remove('menu_active');
            }
            else {
                sub.classList.add('menu_active');
            }
        }
    }
}

