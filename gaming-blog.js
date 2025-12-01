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


  // Get current year
  const currentYear = new Date().getFullYear();
  // Set it in the span with id="year"
  document.getElementById('year').textContent = currentYear;




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



