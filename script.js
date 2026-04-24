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

// EmailJS - Contact Form
emailjs.init('YOUR_PUBLIC_KEY');

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(document.getElementById('email').value)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';

    const templateParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(() => {
        showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
      })
      .catch(() => {
        showStatus('❌ Failed to send message. Please try again or email me directly.', 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
      });
  });
}

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status form-status--' + type;
  setTimeout(() => { formStatus.className = 'form-status'; formStatus.textContent = ''; }, 6000);
}
