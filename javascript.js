const step1Btn = document.querySelector(".step1 button");
const step2Btn = document.querySelector(".step2 button");
const step3Btn = document.querySelector(".step3 button");
const stepBtn = [step1Btn, step2Btn, step3Btn];

const formStep1Element = document.querySelector(".step1");
const formStep2Element = document.querySelector(".step2");
const formStep3Element = document.querySelector(".step3");
const formStepElement = [formStep1Element, formStep2Element, formStep3Element];

const ulElement = document.querySelector("ul");
const stepLink = document.querySelector("#numsStep");
const stepRadioLink = document.querySelectorAll(".step-radio-item");

let step = 1;

formStepElement.forEach((el, id) => {
    el.style.display = (id === 0 ? "block" : "none");
});

function nextStep() {
    step += 1;
    if (step > 3)
        step = 1;
}

function showRadioStepLink() {
    stepRadioLink.forEach((el, id) => {
        el.classList.remove("radio-current-step");
    })
    for(let i = 0; i < step; ++i)
        stepRadioLink[i].classList.add("radio-current-step");
}

function showStep() {
    formStepElement.forEach(el => el.style.display = "none");
    formStepElement[step - 1].style.display = "block";
    stepLink.textContent = step;
    showRadioStepLink();
}

step1Btn.addEventListener("click", (event) => {
    // let inputElement = formStep1Element.querySelector("input");
    if (formStep1Element.checkValidity()) {
        event.preventDefault();
        nextStep();
        showStep();
    }
});

step2Btn.addEventListener("click", (event) => {
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userInterestedElements =
        document.querySelectorAll(".step2 input[type=checkbox]:checked");
    let nameField = document.getElementById("userName");
    let emailField = document.getElementById("userEmail");
    nameField.textContent = userName;
    emailField.textContent = userEmail;
    userInterestedElements.forEach(el => {
        let liElement = document.createElement("li");
        liElement.textContent = el.value;
        ulElement.appendChild(liElement);
    })
    nextStep();
    showStep();
})

step3Btn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Success");
})



