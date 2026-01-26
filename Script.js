let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

function updateProgress() {
    const percent = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = percent + "%";
}

function nextStep() {
    /* if (currentStep >= steps.length - 1) return;*/

    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");

    updateProgress();
}

/* Form submit */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit clicked");

    form.style.display = "none";
    progressBar.style.width = "100%";
    successMessage.style.display = "block";
});

/* Initial progress */
updateProgress();