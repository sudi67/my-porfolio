// Apply base link styles
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.style.color = '#0066cc';
  link.style.textDecoration = 'none';
  link.style.display = 'inline-block';
  link.style.margin = '5px 0';
  
  // Add hover effect
  link.addEventListener('mouseenter', () => {
    link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseleave', () => {
    link.style.textDecoration = 'none';
  });
});

// Add icons based on link type
const newTabLinks = document.querySelectorAll('a[target="_blank"]');
newTabLinks.forEach(link => {
  const icon = document.createElement('img');
  icon.src = 'new-tab.svg';
  icon.width = 14;
  icon.alt = '(Opens in new tab)';
  link.appendChild(icon);
});

const pptLinks = document.querySelectorAll('a[href$=".ppt"]');
pptLinks.forEach(link => {
  const icon = document.createElement('img');
  icon.src = 'powerpoint.svg';
  icon.width = 14;
  icon.alt = '(PowerPoint file)';
  link.appendChild(icon);
});

// Handle missing icons
const missingIcons = document.querySelectorAll('img[src="missing-icon.svg"]');
missingIcons.forEach(icon => {
  icon.src = 'missing-icon.svg';
  icon.width = 14;
});
