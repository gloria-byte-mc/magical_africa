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
const cultureContent = document.querySelector('.culture-traditions');
const LeadersSection = document.querySelector('.leaders-section');
const Nature = document.querySelector('.nature-interaction');


listItems[0].classList.add('active');
overviewContent.style.display = 'flex';
languageContent.style.display = 'none';
cultureContent.style.display = 'none';
LeadersSection.style.display = 'none';
Nature.style.display = 'none'


listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    listItems.forEach(li => li.classList.remove('active'));
    
    // Add active class to clicked item
    item.classList.add('active');

    // Hide all content sections
    overviewContent.style.display = 'none';
    languageContent.style.display = 'none';
    cultureContent.style.display = 'none';
    LeadersSection.style.display = 'none';
    Nature.style.display = 'none';

    // Show the corresponding content based on index
    if (index === 0) {
      // Overview
      overviewContent.style.display = 'flex';
    } else if (index === 1) {
      // Language
      languageContent.style.display = 'flex';
    } else if (index === 2) {
      // Culture & Traditions
      cultureContent.style.display = 'flex';
    } else if (index === 3) {
      LeadersSection.style.display = 'flex';
    } else if (index === 4) {
      Nature.style.display = 'flex';
    }

    // Add more else if blocks for other tabs (Culture, Leaders, etc.)
  });
});