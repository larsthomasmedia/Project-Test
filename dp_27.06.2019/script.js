let btn = document.querySelector('#statement');
let boxes = document.querySelectorAll('.box');
let text = document.querySelector('#text')


btn.addEventListener('click', function(){
    text.classList.toggle('text-on')
    let counter = 0;
    for (box of boxes){
        box.style.transitionDelay= counter * 500 + "ms";
        box.classList.toggle('boxon');
        counter++;
    }
});

