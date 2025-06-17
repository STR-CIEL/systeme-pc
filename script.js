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


