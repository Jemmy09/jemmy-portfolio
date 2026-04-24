// Initialize dark mode from localStorage
const body = document.body;
const darkModeBtn = document.getElementById('dark-mode-toggle');

// Check saved preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeBtn.textContent = '☀️';
}

// Dark Mode Toggle
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
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:jemmyfrancisco30@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    contactForm.reset();
    alert('Thank you for your message! Please send the email that opens.');
  });
}
