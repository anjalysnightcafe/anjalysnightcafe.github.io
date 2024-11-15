// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Scroll reveal effect for menu items
  const menuItems = document.querySelectorAll(".menu-item");
  window.addEventListener("scroll", () => {
    menuItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }
    });
  });
  