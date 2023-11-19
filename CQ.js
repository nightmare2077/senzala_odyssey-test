document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".menu-btn nav");
  
    menuBtn.addEventListener("mouseenter", function () {
      nav.style.display = "block";
    });
  
    menuBtn.addEventListener("mouseleave", function () {
      nav.style.display = "none";
    });
  });