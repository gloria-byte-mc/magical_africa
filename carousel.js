
   
    const images = [
      'images/African-storytelling.jpg',
      'images/zulu.jpg',
      'images/drums2.jpg'
     
      ];

    let currentIndex = 0;
    const side1 = document.querySelector('.side1');

    side1.style.backgroundImage = `url('${images[currentIndex]}')`;

   
    function changeBackground() {
      currentIndex++;
      
     
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      
      side1.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    
    setInterval(changeBackground, 20000);
 