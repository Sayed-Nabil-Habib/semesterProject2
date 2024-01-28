function togglePasswordValidationMessage() {
  const passwordInput = document.getElementById('passwordReg');
  const passwordValidationMessage = document.querySelector('.password-validation-message');

  const updateValidationMessage = () => {
      const isValid = passwordInput.checkValidity();
      passwordValidationMessage.style.display = isValid ? 'none' : 'block';
  };

  passwordInput.addEventListener('input', updateValidationMessage);

  // Optionally, you can also trigger the validation on initial load
  document.addEventListener('DOMContentLoaded', updateValidationMessage);
}

// Call the function to set up the validation
togglePasswordValidationMessage();
