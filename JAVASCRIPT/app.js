const form = document.querySelector('#form');
const username = document.querySelector("#userName");
console.log("username", username);

form.addEventListener('submit', (e) => {
    const fullName = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const amount = document.querySelector('#loan-amount').value;
    const timeYears = document.querySelector('#loan-time').value;

    const otp = Math.floor(1000 + Math.random() * 9000);
    alert(`Your OTP is ${otp}`);

    // const otpValue = localStorage.setItem("otp", "otp");
    // console.log(otpValue);

    localStorage.setItem('otp', otp);
    localStorage.setItem("fullname", fullName);
    localStorage.setItem("email", email);

    const storedOtp = localStorage.getItem('otp');

    // Display the OTP (e.g., in the console or on the page)
    console.log('Your OTP is:', storedOtp);

    // localStorage.setItem('fullname', fullname);
    window.location.href = 'validatePage.html';
});



const calculateEmi = document.querySelector('#calculate-emi');

console.log(calculateEmi);
calculateEmi.addEventListener('click', (e) => {
    const amount = document.querySelector('#loan-amount').value;
    // console.log(amount);
    const timeYears = document.querySelector('#loan-time').value;
    // console.log(timeYears);

    const EmiValue = document.querySelector('#emi-display')
    // console.log(EmiValue);


    const annualRate = 9.15; // Fixed interest rate in %
    const tenureMonths = timeYears * 12;
    const monthlyRate = annualRate / (12 * 100);


    if (isNaN(amount) || isNaN(timeYears) || amount <= 0 || timeYears <= 0) {
        alert("Enter the valid details")
        return;
    }

    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    // console.log(emi);

    const roundValue = Math.round(emi);
    EmiValue.textContent = `Estimated EMI : ₹${roundValue} /Months`

});
