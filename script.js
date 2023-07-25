// Get password & eye element
var password = document.getElementById("password");
var eye = document.getElementById("eye");

// Perform event action for click
eye.addEventListener("click", togglePass);

function togglePass() {
  eye.classList.toggle("active");

  password.type == "password"
    ? (password.type = "text")
    : (password.type = "password");
}
