


// 1. Show a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to UMU Gaming Zone! JavaScript Loaded Successfully.");
});

// ---------------------------------------------------------

// 2. Highlight Navbar Links When Scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("class");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.href.includes(current)) {
            a.classList.add("active");
        }
    });
});

// ---

// 3. Click to Zoom Image Effect
const galleryImages = document.querySelectorAll(".image-grid img");

galleryImages.forEach(img => {
    img.addEventListener("click", function () {
        img.classList.toggle("zoomed");
    });
});


            // Simple interactive effect
            const header = document.querySelector('header');
            header.addEventListener('mouseover', () => {
                header.style.color = '#ff4500';
            });
            header.addEventListener('mouseout', () => {
                header.style.color = '#ffffff';
            });
            // Show message when page loads
window.onload = function () {
    alert("Welcome to the Fitness Training Website!");
};

// Add click actions to social icons
document.querySelectorAll(".folo img").forEach(function (icon) {
    icon.addEventListener("click", function () {
        alert("You clicked a social media icon!");
    });
});

// Search button functionality
let searchBtn = document.querySelector("button.btn-outline-success");
searchBtn.addEventListener("click", function () {
    let keyword = prompt("Enter something to search:");
    if (keyword) {
        alert("You searched for: " + keyword);
    } else {
        alert("Search cancelled");
    }
});

// Auto footer message
console.log("© 2025 Fitness Training Website – JavaScript active.");

        
    
