
   document.querySelectorAll(".read-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); 

            alert("HEY🎮🎮🎮 feel free to continue...... (Game mode)");

           
            const link = btn.dataset.link;
            window.location.href = link;
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


