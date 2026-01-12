// Hero Carousel - No additional HTML needed
const heroCarousel = {
  currentIndex: 0,
  slides: [
    {
      image: 'images/pyramids.jpg',
      title: 'Welcome To Magical Africa',
      subtitle: 'The Real African Story'
    },
    {
      image: 'images/maasai.jpg', // Replace with your actual image path
      title: 'Pooki sidai eitu oshi',
      subtitle: 'Nwee ahụmịhe omenala bara ụba'
    },
    {
      image: 'images/Igbo.jpg', // Replace with your actual image path
      title: 'Mee ka ị mata omenala bara ụba',
      subtitle: 'Mee emume ihe nketa Afrịka'
    },
    {
      image: 'images/Zulu.jpg', // Replace with your actual image path
      title: 'Hlola izimangaliso zemvelo',
      subtitle: 'Ubuhle obudlula umcabango'
    }
  ],
  autoPlayInterval: 10000 // Change slide every 5 seconds
};

// Get DOM elements
const heroSection = document.querySelector('.hero-section');
const heroTitle = document.querySelector('.hero-text h1');
const heroSubtitle = document.querySelector('.hero-text p');

// Function to change slide with smooth transition
function changeSlide(index) {
  heroCarousel.currentIndex = index;
  const currentSlide = heroCarousel.slides[index];
  
  // Update background image instantly
  heroSection.style.backgroundImage = `url(${currentSlide.image})`;
  
  // Update text content instantly
  heroTitle.textContent = currentSlide.title;
  heroSubtitle.textContent = currentSlide.subtitle;
}

// Function to go to next slide
function nextSlide() {
  let nextIndex = heroCarousel.currentIndex + 1;
  
  // Loop back to first slide after last one
  if (nextIndex >= heroCarousel.slides.length) {
    nextIndex = 0;
  }
  
  changeSlide(nextIndex);
}

// Initialize and start carousel
function startCarousel() {
  // Start automatic slideshow (no transition needed)
  setInterval(nextSlide, heroCarousel.autoPlayInterval);
}

// Start when page loads
window.addEventListener('DOMContentLoaded', startCarousel);