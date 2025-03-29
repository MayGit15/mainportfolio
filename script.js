document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.querySelector(".scroll-button a");
  const body = document.body;
  const navBar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const navLinks = document.querySelectorAll(".menu li a");

  // Sticky Navbar & Scroll Button
  window.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop > 20;
    nav.classList.toggle("sticky", scrolled);
    scrollBtn.style.display = scrolled ? "block" : "none";
  });

  const toggleSideNav = (show) => {
    navBar.classList.toggle("active", show);
    menuBtn.style.opacity = show ? "0" : "1";
    menuBtn.style.pointerEvents = show ? "none" : "auto";
    body.style.overflow = show ? "hidden" : "auto";
    scrollBtn.style.pointerEvents = show ? "none" : "auto";
  };

  // Open Side Navigation
  menuBtn.addEventListener("click", () => toggleSideNav(true));

  // Close Side Navigation
  cancelBtn.addEventListener("click", () => toggleSideNav(false));

  // Close Side Navigation when clicking a link
  navLinks.forEach((link) =>
    link.addEventListener("click", () => toggleSideNav(false))
  );
});

  
  // Skills Progress Bars Animation
  function animateProgressBar(id, target) {
    const progressBar = document.getElementById(id);
    let width = 0;
    const interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.textContent = width + "%";
      }
    }, 20); // Speed of animation (20ms per increment)
  }
  
  animateProgressBar("progress1", 90); // HTML: 90%
  animateProgressBar("progress2", 85); // CSS: 85%
  animateProgressBar("progress3", 80); // JavaScript: 80%
  animateProgressBar("progress4", 75); // React: 75%
  animateProgressBar("progress5", 70); // Node.js: 70%