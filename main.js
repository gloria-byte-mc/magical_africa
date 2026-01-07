 const menuBtn = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const sideMenu = document.querySelector('.side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
  
   
    menuBtn.addEventListener('click', () => {
      sideMenu.classList.add('active');
      menuOverlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
    });

   
    menuOverlay.addEventListener('click', () => {
      sideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
    });



    // Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Change 50 to whatever scroll position you want
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



const services = [
  {
    title: "Learn Language",
    description: "Discover the beauty of African languages and connect with diverse cultures across the continent.",
    image: "images/Learn-Language2.jpg"
  },
  {
    title: "Explore identity and tradition",
    description: "Uncover the journeys and movements that formed Africa’s diverse cultures and united its people through time.",
    image: "images/explore-identity.jpg"
  },
  {
    title: "Stream folklore, music, and storytelling",
    description: "Uncover the roots of African identity and the timeless traditions passed through generations.",
    image: "images/African-storytelling.jpg"
  },
  /*
  {
    title: "Buy cultural merchandise made by Africans",
    description: "Buy authentic cultural merchandise handcrafted by Africans, celebrating heritage, creativity, and vibrant traditions.",
    image: "images/learn-language.jpg"
  },
  {
    title: "Book cultural experts, events,",
    description: "Buy authentic cultural merchandise handcrafted by Africans, celebrating heritage, creativity, and vibrant traditions.",
    image: "images/learn-language.jpg"
  },
  {
    title: "Discover history and migration",
    description: "Discover Africa’s history and migration, uncovering cultures, journeys, traditions, and ancestral stories worldwide.",
    image: "images/learn-language.jpg"
  },
  {
    title: "Create content and tell their community's story",
    description: "Create engaging content that shares and celebrates your community’s unique stories, culture, and heritage.",
    image: "images/learn-language.jpg"
  },
  {
    title: "Engage with 2D cultural objects and art",
    description: "Engage with vibrant 2D cultural art and objects, exploring heritage, creativity, and tradition.",
    image: "images/learn-language.jpg"
  }
    */
];

let currentIndex = 0;



const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const wrap1Title = document.querySelector('.wrap1 h1');
const wrap1Description = document.querySelector('.wrap1 p');
 const learnMoreBtn = document.querySelector('.learn-more');
const wrap2 = document.querySelector('.wrap2');


function updateService() {
  const service = services[currentIndex];
  
  wrap1Title.textContent = service.title;
  wrap1Description.textContent = service.description;
  wrap2.style.backgroundImage = `url(${service.image})`;
}

// Next button click
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % services.length;
  updateService();
});

// Previous button click
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + services.length) % services.length;
  updateService();
});

// Initialize with first service
updateService();





//For marketplace
 const marketplaceData = [
      // Category 1: Jewelery
      {
        sections: [
          {
            image: 'images/maasai-bracelets.jpg',
            title: 'Maasai bracelets',
            description: 'Maasai beaded bracelets showcasing tradition and artistry.',
            Price: '$15'
          },
          {
            image: 'images/beaded-jewelery.jpg',
            title: 'Beaded jewelery',
            description: 'Handcrafted stone jewelry with natural elegance.',
            Price: '$75'
          },
          {
            image: 'images/maasai-necklaces.jpg',
            title: 'Maasai necklaces',
            description: 'Traditional Maasai beaded necklaces with vibrant colors.',
            Price: '$65'
          }
        ]
      },
      // Category 2: Masks
      {
        sections: [
          {
            image: 'images/nigeria-wear.jpg',
            title: 'Ankara Gown',
            description: 'Made from Ankara Fabric, worn across many Nigerian cultures.',
            Price: '$200'
          },
          {
            image: 'images/maasai-wear.jpg',
            title: 'Maasai Leso',
            description: 'Worn by Maasai men and women across Kenya and Tanzania.',
            Price: '$120'
          },
          {
            image: 'images/kitenge.jpg',
            title: 'Kitenge',
            description: 'Made from brightly patterned cotton fabric for both men and women.',
            Price: '$100'
          }
        ]
      },
      // Category 3: Tools & Weapons
      {
        sections: [
          {
            image: 'images/hammer.jpg',
            title: 'Carpentry Tools',
            description: 'Artisan carpentry tools for perfect craftsmanship.',
            Price: '$300'
          },
          {
            image: 'images/shoka.png',
            title: 'Farming Tools',
            description: 'Traditional farming implements still in use today.',
            Price: '$150'
          },
          {
            image: 'images/spear.jpg',
            title: 'Traditional Spears',
            description: 'Handcrafted spears used by warriors throughout history.',
            Price: '$80'
          }
        ]
      },
      // Category 4: Musical Instruments
      {
        sections: [
          {
            image: 'images/drums.jpg',
            title: 'Drums',
            description: 'Traditional African drums for ceremonies and celebrations.',
            Price: '$400'
          },
          {
            image: 'images/string-instrument.jpg',
            title: 'String Instruments',
            description: 'Handmade string instruments with unique sounds.',
            Price: '$200'
          },
          {
            image: 'images/wind-instrument.jpg',
            title: 'Wind Instruments',
            description: 'Traditional flutes and horns made from natural materials.',
            Price: '$150'
          }
        ]
      }
    ];


    
    // Get elements
    const categoryItems = document.querySelectorAll('#categoryList li');
    const sections = document.querySelectorAll('.section');

    // Function to update sections
    function updateSections(categoryIndex) {
      const data = marketplaceData[categoryIndex];
      
      sections.forEach((section, index) => {
        const sectionData = data.sections[index];
        section.style.backgroundImage = `url(${sectionData.image})`;
        
        const title = document.getElementById(`title${index + 1}`);
        const desc = document.getElementById(`desc${index + 1}`);
        const price = document.getElementById
        (`span${index + 1}`);
        title.textContent =  sectionData.title;
        desc.textContent = sectionData.description;
        price.textContent = 'Price:' + " " + sectionData.Price;
      });
    }

    // Add click event listeners to category items
    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all items
        categoryItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get category index and update sections
        const categoryIndex = parseInt(item.getAttribute('data-category'));
        updateSections(categoryIndex);
      });
    });

    // Initialize with first category
    updateSections(0);


    

 //for opening the answers for the questions
const questions = document.querySelectorAll('.question1');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Get the chevron icon and answer within this question
    const chevron = question.querySelector('i');
    const answer = question.nextElementSibling;
    
    // Toggle the answer visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      chevron.style.transform = 'rotate(0deg)';
    } else {
      answer.style.display = 'block';
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});



//For changing hero-section-image

document.querySelector('.hero-section').style.transition = 'background-image 0.8s ease';

// Get the hero section and CTA links
const heroSection = document.querySelector('.hero-section');
const ctaLinks = document.querySelectorAll('.CTA-buttons a');

// Define background images for each link
const backgroundImages = {
  'Learn Language': 'images/learn-language.jpg',
  'Explore culture': 'images/maasai.jpg'
};


ctaLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    const linkText = this.textContent.trim();
    const newImage = backgroundImages[linkText];
    
    if (newImage) {
      heroSection.style.backgroundImage = `url(${newImage})`;
    }
  });
});



const Home = document.getElementById("home");

Home.addEventListener('click', ()=>{
  window.location.href = "index.html"
});



const Logo = document.getElementById("logo-header");

Logo.addEventListener("click", ()=>{
  window.location.href = "index.html"
});



 const carousel = document.getElementById('languageCarousel');
    const spans = carousel.querySelectorAll('span');

    spans.forEach(span => {
      span.addEventListener('mouseenter', () => {
        carousel.classList.add('paused');
      });

      span.addEventListener('mouseleave', () => {
        carousel.classList.remove('paused');
      });
    });