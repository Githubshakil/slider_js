document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelector('.slides');
    let dotsContainer = document.querySelector('.dots');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let slide = document.querySelectorAll('.slide');
    let slideCount = slide.length;

    let currentSlide = 0;

    // Create dots
    for ( let i=0; i<slideCount; i++ ) {
        let dot = document.createElement('span');
        if(i === 0){
            dot.classList.add('active');
        }
        dot.classList.add('dot');
        dot.attribute('data-index', i);
        dotsContainer.appendChild(dot);

    }

    let dots = document.querySelectorAll('.dot');

    function updateSlider(index){
        if(index >= slideCount){
            currentSlide = 0;
        }else if(index < 0){
            currentSlide = slideCount - 1;
    }else{
        currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
    }

    prevButton.addEventListener('click', function(){
        updateSlider(currentSlide - 1);
    });

    nextButton.addEventListener('click', function(){
        updateSlider(currentSlide + 1);
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', function(){
            let index = parseInt(dot.getAttribute('data-index'));
            
        });
    }); 
});