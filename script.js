// Change nav style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});
