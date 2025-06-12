//login form validation
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  let valid = true;

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordValue = password.value;
  const hasLetter = /[a-zA-Z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

  if (
    passwordValue.length < 6 ||
    !hasLetter ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    passwordError.textContent =
      "Password must be at least 6 characters long and include a letter, a number, and a special character.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    alert("Login successful!"); // Replace with actual login logic
  }
});
//signup modal inside login modal
// document.getElementById("openSignupModal").addEventListener("click", function () {
//   const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
//   signupModal.show();
// });
//for scrollable image gallery in index.html page
function scrollGallery(direction) {
  const gallery = document.getElementById('galleryRow');
  const scrollAmount = 300; // adjust based on card width
  gallery.scrollLeft += direction * scrollAmount;
}
    // function scrollGallery(direction) {
    //     const gallery = document.getElementById('scrollimage');
    //     const scrollAmount = 300; // adjust based on card width
    //     gallery.scrollLeft += direction * scrollAmount;
    // }
    function scrollImageGallery(direction) {
      const gallery = document.getElementById('scrollimage');
      const scrollAmount = 300; // adjust based on card width
      if (gallery) {
          gallery.scrollLeft += direction * scrollAmount;
      }
  }
//for signup and login
document.addEventListener('DOMContentLoaded', function () {
  const openSignupBtn = document.getElementById('openSignup');
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));

  if (openSignupBtn) {
    openSignupBtn.addEventListener('click', function (e) {
      e.preventDefault(); // prevent link from navigating
      bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
      signupModal.show();
    });
  }
});
//

  

  
