// Initialize dark mode from localStorage
const body = document.body;
const darkModeBtn = document.getElementById('dark-mode-toggle');

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isNowDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isNowDarkMode);
  darkModeBtn.textContent = isNowDarkMode ? '☀️' : '🌙';
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

