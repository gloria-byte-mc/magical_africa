
    // Array of background images
    const images = [
      'images/African-storytelling.jpg',
      'images/zulu.jpg',
      'images/drums2.jpg'
     
      ];

    let currentIndex = 0;
    const side1 = document.querySelector('.side1');

    // Set initial background
    side1.style.backgroundImage = `url('${images[currentIndex]}')`;

    // Function to change background
    function changeBackground() {
      currentIndex++;
      
      // If we've reached the end, go back to the first image
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      
      // Update background image
      side1.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // Change background every 5 seconds (5000 milliseconds)
    setInterval(changeBackground, 20000);
 