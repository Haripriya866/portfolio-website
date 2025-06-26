document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('modeToggle');
  const body = document.body;
  const logo = document.querySelector('.logo');
  const socialIcons = document.querySelectorAll('.social-icon');

  const moonIcon = "https://res.cloudinary.com/dj6b0oaa1/image/upload/v1750855689/Moon_m0gylr.png";
  const sunIcon = "https://res.cloudinary.com/dj6b0oaa1/image/upload/v1750922899/Group_21_qsz8vb.png";

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');

    toggleButton.src = isDark ? sunIcon : moonIcon;

    const invertValue = isDark ? 'invert(1)' : 'invert(0)';
    logo.style.filter = invertValue;
    socialIcons.forEach(icon => {
      icon.style.filter = invertValue;
    });
  });
});
