const menu_sub = document.getElementsByClassName('menu_sub');
let arr_sub = Array.from(menu_sub);
for(let sub of arr_sub) {
    const links = sub.closest.querySelectorAll('a');
    let arr_links = Array.from(links);
    for(let link of arr_links) {
        link.onclick = function() {
            sub.classList.add('menu_active');
            for(let sub_active of arr_sub) {
                if(sub_active.classList.contains('menu_active')&&(sub_active !== sub)) {
                    sub_active.classList.remove('menu_active');
                }
                else if(sub_active === sub) {
                    sub_active.classList.remove('menu_active');
                    return false;
                }
            }
        }
    }
}


