//Show message when page loads
window.addEventListener("load", function () {
    console.log("Page Loaded Successfully!");
    alert("Welcome! Please fill in the information required responsibly.");
});

// Select the form
const form = document.querySelector("form");

//  Listen for form submission
if ( form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.querySelector("input[placeholder='Full Names']");
        const email = document.querySelector("#exampleInputEmail1");
        const password = document.querySelector("#exampleInputPassword1");

        // validation
        if (!email.value || !password.value) {
            alert("Please fill in all required information before submitting.");
            return;
        }
// alert for successful submission
        alert("Form submitted successfully! Thank you.");

        form.submit();
    });
}
let btn =document.querySelector('a');
btn.addEventListener('mousemove', e =>{
    let x = e.clientX * 3 - Reflect.left;
    btn.style.setProperty('--x',x + 'deg')
})
