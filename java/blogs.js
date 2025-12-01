
document.querySelectorAll(".read-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("This will open the futuristic blog page. (Demo mode)");
    });
});


function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", function () {
    let yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

  // Some browsers block autoplay with sound
  // This will unmute and play after the first user click
  document.addEventListener("click", () => {
    const music = document.getElementById("raceMusic");
    music.muted = false;
    music.play();
  });

  
  // Select all buttons on the page
  const allButtons = document.querySelectorAll('button');

  // Loop through each button and add click event
  allButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert("Accept okay");
    });
  });
// Smooth welcome message when page loads
window.addEventListener("load", function () {
    console.log("Page Loaded Successfully!");
    alert(" You're Welcome Racer!! Just refill the tank to Enjoy");
});
