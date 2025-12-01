
window.onload = function () {
    alert("Welcome to Group K Auto Spares — Your reliable auto partner!");
};

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


document.querySelectorAll(".card").forEach(card => {
    card.style.transition = "0.4s";

    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});


document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);
        alert("Thanks for interacting with our services!");
    });
});

let btn = document.createElement("button");
btn.innerText = "↑ Top";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px 15px";
btn.style.border = "none";
btn.style.background = "red";
btn.style.color = "white";
btn.style.cursor = "pointer";
btn.style.borderRadius = "5px";
btn.style.display = "none";
btn.style.zIndex = "999";
document.body.appendChild(btn);


window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
