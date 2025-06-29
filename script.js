

const navToggler = document.querySelector(".toggler-container");

const navigation = document.querySelector(".navigation");

if (navToggler && navigation) {
  navToggler.addEventListener("click", toggleNav);

  function toggleNav() {
    navigation.classList.toggle("active");
  }

    new ResizeObserver(entries => {
    const entry = entries[0];
    if (entry && entry.contentRect && entry.contentRect.width <= 960) {
      navigation.style.transition = "transform 0.3s ease-out";
    } else if (entry && entry.contentRect) {
      navigation.style.transition = "none";
    }
    }).observe(document.body);
}


// Close the navigation menu when clicking outside of it
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navigation');
    const toggler = document.querySelector('.toggler-container');
    // Si le menu est ouvert et qu'on clique en dehors du menu ou du bouton
    if (nav && nav.classList.contains('active')) {
        if (
            !nav.contains(event.target) &&
            !toggler.contains(event.target)
        ) {
            nav.classList.remove('active');
        }
    }
});




// Smooth scroll 
document.querySelectorAll('a[href^="#title-contact"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hide topbar on scroll down, show on scroll up
document.addEventListener('DOMContentLoaded', function() {
    let lastScroll = 0;
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll <= 0) {
            // Toujours afficher la topbar tout en haut de la page
            topbar.classList.remove('hide');
        } else if (currentScroll > lastScroll && currentScroll > 80) {
            // Scroll vers le bas : cache la topbar
            topbar.classList.add('hide');
        } else {
            // Scroll vers le haut : affiche la topbar
            topbar.classList.remove('hide');
        }
        lastScroll = currentScroll;
    });
});