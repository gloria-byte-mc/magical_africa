document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.solutions-wrapper');
  const prevBtn = document.getElementById('prev4');
  const nextBtn = document.getElementById('next4');
  
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.solutions-slide').length;

  function updateCarousel() {
    const slidePercent = currentSlide * 50; // 50% per slide
    wrapper.style.transform = `translateX(-${slidePercent}%)`;
  }

  nextBtn.addEventListener('click', function() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Loop back to first slide
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1; // Loop to last slide
    }
    updateCarousel();
  });
});