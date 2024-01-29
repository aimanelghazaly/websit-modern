let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.List');
let thumbnailBorderDom = document.querySelector('.thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;
nextDom.onclick = function(){
    showSlider('next');    
}
prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)



function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = document.querySelectorAll('.thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        // Assurez-vous de déclarer et d'initialiser 'next' correctement
        // next.click();
    }, timeAutoNext);

    clearTimeout(runTimeOut);
    let runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
