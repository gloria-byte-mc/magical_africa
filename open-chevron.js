const toggles = document.querySelectorAll('.toggle-icon');

toggles.forEach(icon => {
  icon.addEventListener('click', () => {
    const box = icon.closest('.boxy');
    const content = box.querySelector('.boxy-p2');

    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';

    // rotate icon
    icon.classList.toggle('rotate');
  });
});



//for the lists

// Tab navigation for community descriptions
const listItems = document.querySelectorAll('.community-descriptions ul li');
const overviewContent = document.querySelector('.overview-content');
const languageContent = document.querySelector('.language-content');

// Set first tab as active by default
listItems[0].classList.add('active');
overviewContent.style.display = 'flex';
languageContent.style.display = 'none';

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    listItems.forEach(li => li.classList.remove('active'));
    
    // Add active class to clicked item
    item.classList.add('active');

    // Hide all content sections
    overviewContent.style.display = 'none';
    languageContent.style.display = 'none';

    // Show the corresponding content based on index
    if (index === 0) {
      // Overview
      overviewContent.style.display = 'flex';
    } else if (index === 1) {
      // Language
      languageContent.style.display = 'flex';
    }
    // Add more else if blocks for other tabs (Culture, Leaders, etc.)
  });
});