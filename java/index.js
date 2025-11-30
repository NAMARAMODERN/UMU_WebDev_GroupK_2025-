// Smooth welcome message when page loads
window.addEventListener("load", function () {
    console.log("Page Loaded Successfully!");
    alert("Welcome! Group k WEB pages loaded successfully, explore ur good and interesting pages racing and gaming pannels ON MODERN`S homepage!");
});

// Simple hover effect for all cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Alert confirmation before leaving or refreshing the page
window.addEventListener("beforeunload", function (e) {
    // Custom alert message
    let message = "Are you sure you want to leave this MODERN`S page?";

    e.preventDefault();
    e.returnValue = message;
    return message;
});

// Confirm box when clicking navigation links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // stop link first

        let userMessage = "Do you really want to go to this page, ?";

        if (confirm(userMessage)) {
            // OK → go to selected page
            window.location.href = link.href;
        } else {
            // Cancel → stay on current page
            console.log("Navigation cancelled.");
        }
    });
});
