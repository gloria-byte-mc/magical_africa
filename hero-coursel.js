// Hero Carousel - No additional HTML needed
const heroCarousel = {
  currentIndex: 0,
  slides: [
    {
      image: 'images/pyramids.jpg',
      title: 'Welcome To Magical Africa',
      subtitle: 'The Real African Story',
      
    },
      {
      image : 'images/Igbo.jpg',
      title: 'Karibu Magical Africa',
      subtitle: 'Safari Halisi ya Afrika',
      name: '(Swahili)',
      image2 : 'images/Kenyan-flag.png'
    },
    {
      image: 'images/maasai.jpg', // Replace with your actual image path
      title: 'Pooki sidai eitu oshi',
      subtitle: 'Nwee ahụmịhe omenala bara ụba',
      name: '(Maasai)',
      image2 : 'images/Kenyan-flag.png'
    },
    {
      image: 'images/Igbo.jpg', // Replace with your actual image path
      title: 'Mee ka ị mata omenala bara ụba',
      subtitle: 'Mee emume ihe nketa Afrịka',
      name: '(Igbo)',
      image2 : 'images/Nigeria-flag.png'
    },
    {
      image: 'images/zulu.jpg', // Replace with your actual image path
      title: 'Hlola izimangaliso zemvelo',
      subtitle: 'Ubuhle obudlula umcabango',
      name: '(Zulu)',
      image2 : 'images/South-African-flag.png'
    },
  

  ],
  autoPlayInterval: 10000 // Change slide every 5 seconds
};

// Get DOM elements
const heroSection = document.querySelector('.hero-section');
const heroTitle = document.querySelector('.hero-text h1');
const heroSubtitle = document.querySelector('.hero-text p');
const heroCommunity = document.querySelector('.community-name');
const heroImage = document.querySelector('.hero-img');

// Function to change slide with smooth transition
function changeSlide(index) {
  heroCarousel.currentIndex = index;
  const currentSlide = heroCarousel.slides[index];
  
  // Update background image instantly
  heroSection.style.backgroundImage = `url(${currentSlide.image})`;
  

   // Flag / hero image logic
  if (currentSlide.image2) {
    heroImage.src = currentSlide.image2;
    heroImage.style.display = 'block';
  } else {
    heroImage.style.display = 'none';
    heroImage.removeAttribute('src');
  }
  
  // Update text content instantly
  heroTitle.textContent = currentSlide.title;
  heroSubtitle.textContent = currentSlide.subtitle;
  heroCommunity.textContent = currentSlide.name;
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