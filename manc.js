let currentSlideIndex = 0;
function showSlide(index) {
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
// Ensure index loops back to valid range
if (index >= totalSlides) {
currentSlideIndex = 0;
} else if (index < 0) {
currentSlideIndex = totalSlides - 1;
} else {
currentSlideIndex = index;
}
// Update slider position
const slider = document.querySelector('.slider');
slider.style.transform = `translateX(${-currentSlideIndex * 100}%)`;
// Update active class
slides.forEach(slide => slide.classList.remove('active'));
slides[currentSlideIndex].classList.add('active');
}
function changeSlide(direction) {
showSlide(currentSlideIndex + direction);
}
function currentSlide(index) {
showSlide(index - 1); 
}
setInterval(() => {
changeSlide(1);
}, 5000);
