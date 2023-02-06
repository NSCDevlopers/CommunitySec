const otpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

otpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.getElementById("OTP").addEventListener("input", function(e) {
    if (this.value.length > 6) {
      this.value = this.value.slice(0, 6);
    }
});

document.getElementById("phoneNumber").addEventListener("input", function(e) {
    if (this.value.length > 6) {
      this.value = this.value.slice(0, 10);
    }
});