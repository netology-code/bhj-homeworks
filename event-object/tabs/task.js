let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tab__content')

tabs.forEach(function(element, index){
    element.addEventListener('click', function(){
        if (element.classList.contains('tab_active')) {
            tabs.forEach(function(element){
                element.classList.remove('tab_active');
            })
            content.forEach(function(element){
                element.classList.remove('tab__content_active')
            })
        } else {          
            content.forEach((element) => element.classList.remove('tab__content_active'))
            tabs.forEach((element) => element.classList.remove('tab_active'))
            element.classList.add('tab_active');
            content[index].classList.add('tab__content_active')    
        } 
    })
})
