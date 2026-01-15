
  // Region data
  const regionData = {
    north: {
      name: "North Africa",
      communities: ["Berber", "Tuareg", "Nubians", "Copts", "Arabs"]
    },
    west: {
      name: "West Africa",
      communities: ["Yoruba", "Hausa", "Igbo", "Fulani", "Ashanti", "Wolof", "Mandinka"]
    },
    central: {
      name: "Central Africa",
      communities: ["Kongo", "Luba", "Mongo", "Fang", "Bamileke", "Pygmy"]
    },
    east: {
      name: "East Africa",
      communities: ["Maasai", "Kikuyu", "Swahili", "Amhara", "Oromo", "Somali"]
    },
    southern: {
      name: "Southern Africa",
      communities: ["Zulu", "Xhosa", "San", "Shona", "Tswana", "Sotho", "Ndebele"]
    }
  };

  // DOM elements
  const tooltip = document.getElementById('tooltip');
  const tooltipTitle = document.getElementById('tooltipTitle');
  const tooltipCommunities = document.getElementById('tooltipCommunities');
  const regions = document.querySelectorAll('.region');

  // Show tooltip on hover
  regions.forEach(region => {
    region.addEventListener('mouseenter', (e) => {
      const regionKey = region.getAttribute('data-region');
      const data = regionData[regionKey];

      if (data) {
        tooltipTitle.textContent = data.name;
        tooltipCommunities.innerHTML = data.communities
          .map(c => `<span class="community-tag">${c}</span>`)
          .join('');
        tooltip.classList.add('show');
      }
    });

    region.addEventListener('mousemove', (e) => {
      const mapWrapper = document.querySelector('.map-wrapper');
      const rect = mapWrapper.getBoundingClientRect();
      
      let x = e.clientX - rect.left + 15;
      let y = e.clientY - rect.top + 15;

      // Prevent tooltip from going off screen
      if (x + tooltip.offsetWidth > rect.width) {
        x = e.clientX - rect.left - tooltip.offsetWidth - 15;
      }
      if (y + tooltip.offsetHeight > rect.height) {
        y = e.clientY - rect.top - tooltip.offsetHeight - 15;
      }

      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    });

    region.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });



const Hide = document.querySelector('.hide');
const AddMap = document.querySelector('.add-map');

// make sure map is hidden on load
AddMap.style.display = 'none';

Hide.addEventListener('click', () => {
  if (Hide.textContent.trim() === 'Show Map') {
    AddMap.style.display = 'flex';
    Hide.textContent = 'Hide Map';
  } else {
    AddMap.style.display = 'none';
    Hide.textContent = 'Show Map';
  }
});



