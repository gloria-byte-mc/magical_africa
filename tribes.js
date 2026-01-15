const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dots = document.querySelectorAll('.dot');
  
  let currentSlide = 0;
  const totalSlides = 4;

  function updateCarousel() {
    // Move the carousel - each slide is 25% of total width
    const translateValue = -currentSlide * 25;
    carousel.style.transform = `translateX(${translateValue}%)`;
    
    // Update pagination dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Button click events
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Dot click events
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentSlide = parseInt(dot.getAttribute('data-slide'));
      updateCarousel();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });