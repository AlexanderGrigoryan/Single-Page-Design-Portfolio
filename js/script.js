const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider__img');
const sliderContent = document.querySelector('.slider__content');
const sliderPreviews = document.querySelector('.slider__preview');
const sliderNext = document.querySelector('.slider__next');
const sliderImg1 = document.querySelector('.slider__img1');
const sliderImg2 = document.querySelector('.slider__img2');
const sliderImg3 = document.querySelector('.slider__img3');
const sliderImg4 = document.querySelector('.slider__img4');
const sliderImg5 = document.querySelector('.slider__img5');


sliderNext.addEventListener('click', () => {
   let lastImg = sliderImages[0].src;
   sliderImages[0].src = sliderImages[1].src;
   sliderImages[1].src = sliderImages[2].src;
   sliderImages[2].src = sliderImages[3].src;
   sliderImages[3].src = sliderImages[4].src;
   sliderImages[4].src = lastImg;
});

 sliderPreviews.addEventListener('click', () => {
   lastImg = sliderImages[4].src;
   sliderImages[4].src = sliderImages[3].src;
   sliderImages[3].src = sliderImages[2].src;
   sliderImages[2].src = sliderImages[1].src;
   sliderImages[1].src = sliderImages[0].src;
   sliderImages[0].src = lastImg;
});





























    
