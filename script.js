document.addEventListener('DOMContentLoaded', () => {
    const generateOtpButton = document.getElementById('generate-otp-button');
    const generatedOtpInput = document.getElementById('generated-otp');
    const enteredOtpInput = document.getElementById('entered-otp');
    const verifyOtpButton = document.getElementById('verify-otp-button');
    const popupContainer = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopup = document.getElementById('close-popup');

    let generatedOTP = ''; // To store the generated OTP

    // Generate OTP when the button is clicked
    generateOtpButton.addEventListener('click', () => {
        generatedOTP = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
        generatedOtpInput.value = generatedOTP;
        enteredOtpInput.value = ''; // Clear entered OTP field when a new OTP is generated
    });

    // Check if the entered OTP matches the generated OTP
    verifyOtpButton.addEventListener('click', () => {
        const enteredOTP = enteredOtpInput.value.trim();

        if (!generatedOTP) {
            showPopup('Please generate an OTP first.');
            return;
        }

        if (enteredOTP === generatedOTP) {
            showPopup('OTP verified successfully!');
            // Clear input boxes immediately after successful verification
            generatedOtpInput.value = '';
            enteredOtpInput.value = '';
            generatedOTP = ''; // Reset the stored OTP
        } else {
            showPopup('Invalid OTP. Please try again.');
            // Only clear the entered OTP if it's invalid, keep generated OTP visible
            enteredOtpInput.value = '';
        }
    });

    // Close popup
    closePopup.addEventListener('click', () => {
        popupContainer.classList.remove('show');
    });

    // Function to show the popup with animation
    function showPopup(message) {
        popupMessage.textContent = message;
        popupContainer.classList.add('show');
    }
});