// Leaders Carousel
const leadersWrapper = document.querySelector('.leaders-wrappers');
const prevBtn3 = document.getElementById('prev3');
const nextBtn3 = document.getElementById('next3');

let currentLeaderSlide = 0;
const totalLeaderSlides = 2;

function updateLeadersCarousel() {
  const translateValue = -currentLeaderSlide * 50;
  leadersWrapper.style.transform = `translateX(${translateValue}%)`;
}

nextBtn3.addEventListener('click', () => {
  currentLeaderSlide = (currentLeaderSlide + 1) % totalLeaderSlides;
  updateLeadersCarousel();
});

prevBtn3.addEventListener('click', () => {
  currentLeaderSlide = (currentLeaderSlide - 1 + totalLeaderSlides) % totalLeaderSlides;
  updateLeadersCarousel();
});