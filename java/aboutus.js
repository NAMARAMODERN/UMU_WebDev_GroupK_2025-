document.addEventListener("DOMContentLoaded", function () {

  //  NAVBAR EFFECT
  document.querySelectorAll(".nav-link").forEach(link => {
    link.style.transition = "0.3s";

    link.addEventListener("mouseenter", () => {
      link.style.color = "aqua";
      link.style.textShadow = "0 0 10px cyan";
      link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "";
      link.style.textShadow = "none";
      link.style.transform = "scale(1)";
    });
  });


  //  GALLERY & VIDEO IMAGES EFFECT
  document.querySelectorAll(".image-grid img").forEach(img => {
    img.style.transition = "0.3s";

    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.08)";
      img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.6)";
    });

    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });


  //  CARD EFFECT
  document.querySelectorAll(".card").forEach(card => {
    card.style.transition = "0.3s";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.05)";
      card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.6)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "none";
    });
  });


  //  SLIDER IMAGE EFFECT
  document.querySelectorAll(".slider-img").forEach(slide => {
    slide.style.transition = "0.5s";

    slide.addEventListener("mouseenter", () => {
      slide.style.transform = "scale(1.05)";
    });

    slide.addEventListener("mouseleave", () => {
      slide.style.transform = "scale(1)";
    });
  });


  //  SOCIAL ICON EFFECT
  document.querySelectorAll(".footer img").forEach(icon => {
    icon.style.transition = "0.3s";

    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.3) rotate(5deg)";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0deg)";
    });
  });

});
