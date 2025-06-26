// Get stored OTP from localStorage
const storedOtp = localStorage.getItem('otp');
// console.log(`Get Otp: ${storedOtp}`);

// Get entered OTP value
const newOtp = document.querySelector("#otp").value;
// console.log("Entered OTP:", newOtp);

// Get username element and set its content from localStorage
const usernameElement = document.querySelector("#userName");

const user = localStorage.getItem("fullname");

const emailElement = document.querySelector("#email");
const email = localStorage.getItem("email");



if (emailElement && email) {
    emailElement.innerHTML = email;
    console.log("email set to:", email);
} else {
    console.warn("email element or email data not found.");
}


if (usernameElement && user) {
    usernameElement.innerHTML = user;
    console.log("Username set to:", user);
} else {
    console.warn("Username element or user data not found.");
}

// Optional: capture value for form validation or submission
const valiSubmit = newOtp;

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default submission
    const otp = document.querySelector("#otp").value
    const localOtp = localStorage.getItem("otp")
    const messageshow = document.querySelector("#validateOtp")

    if (otp === localOtp) {
        messageshow.innerHTML = "Validattion successfully"
    } else {
        messageshow.innerHTML = "OTP NOT MATCH"
    }
})