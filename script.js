const navToggler = document.querySelector(".toggler-container");

const navigation = document.querySelector(".navigation");

if (navToggler && navigation) {
  navToggler.addEventListener("click", toggleNav);

  function toggleNav() {
    navigation.classList.toggle("active");
  }

  new ResizeObserver(entries => {
    if (entries[0]&&entries[0].contentRect.width <= 960) {
      navigation.style.transition = "transform 0.3s ease-out";
    } else if(entries[0]){
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


