
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

  document.addEventListener("click", () => {
    const music = document.getElementById("raceMusic");
    music.muted = false;
    music.play();
  });

  
  
  const allButtons = document.querySelectorAll('button');


window.addEventListener("load", function () {
    console.log("Page Loaded Successfully!");
    alert(" You're Welcome Racer!! Just refill the tank to Enjoy");
});

