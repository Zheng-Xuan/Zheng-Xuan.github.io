document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling when clicking on navigation links
    const links = document.querySelectorAll('.smooth-scroll');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});

function smoothScroll(e) {
    // Function for smooth scrolling
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Function for navbar shadow
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 5) {
        navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)"; // Add a slight box shadow
      } else {
        navbar.style.boxShadow = "none"; // Remove the box shadow when scrolled to the top
      }
    });
  });
  
// Functions for burger menu on small browsers
function toggleNav() {

  const navLinks = document.querySelector('.nav-burgerlinkcontainer');
  navLinks.classList.toggle('active');
}

const navLinks = document.querySelectorAll('.nav-burgerlinkcontainer a');
navLinks.forEach(link => link.addEventListener('click', () => toggleNav()));


function checkViewportWidth() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const navLinks = document.querySelector('.nav-burgerlinkcontainer');

  if (viewportWidth > 768) {
    navLinks.classList.remove('active');
  }
};

window.addEventListener('load', checkViewportWidth);
window.addEventListener('resize', checkViewportWidth);

// Back to Top Button
document.addEventListener('DOMContentLoaded', function () {
  var backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Adjust the scroll height as needed
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Swiper API for Projects carousel
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});