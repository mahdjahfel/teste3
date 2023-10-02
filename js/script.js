const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) 


// Add this after your existing JavaScript code
const introVideo = document.getElementById('intro-video');
const videoElement = introVideo.querySelector('video');

// Hide the intro video after 5 seconds (5000 milliseconds)
setTimeout(() => {
    introVideo.style.display = 'none';
}, 2000); // Adjust the duration as needed



