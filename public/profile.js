// Load user
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  alert("Please login first");
  window.location.href = "index.html";
}

// Profile data
document.getElementById("fullName").textContent =
  user.fname + " " + user.lname;

document.getElementById("username").textContent =
  "@" + user.username;

document.getElementById("email").textContent = user.email;
document.getElementById("contact").textContent = user.contact;
document.getElementById("year").textContent = user.year;

// Favourites
const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
document.getElementById("favCount").textContent = favourites.length;

// Change Password
function changePassword() {
  const oldPass = document.getElementById("oldPassword").value;
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (!oldPass || !newPass || !confirmPass) {
    alert("All fields required");
    return;
  }

  if (oldPass !== user.password) {
    alert("Current password incorrect");
    return;
  }

  if (newPass.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Passwords do not match");
    return;
  }

  user.password = newPass;
  localStorage.setItem("user", JSON.stringify(user));

  alert("Password updated successfully");

  document.getElementById("oldPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

// Logout
function logout() {
  localStorage.removeItem("user");
  alert("Logged out");
  window.location.href = "index.html";
}
