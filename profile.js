// Get user from localStorage (saved during signup/login)
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  alert("Please login first");
  window.location.href = "index.html";
}

// Set profile data
document.getElementById("fullName").textContent =
  `${user.fname} ${user.lname}`;

document.getElementById("username").textContent =
  `@${user.username}`;

document.getElementById("email").textContent = user.email;
document.getElementById("contact").textContent = user.contact;
document.getElementById("year").textContent = user.year;

// Favourite count
const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
document.getElementById("favCount").textContent = favourites.length;

//Change Password
function changePassword() {
  const oldPass = document.getElementById("oldPassword").value;
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (!oldPass || !newPass || !confirmPass) {
    alert("All password fields are required");
    return;
  }

  if (newPass.length < 8) {
    alert("New password must be at least 8 characters");
    return;
  }

  if (newPass !== confirmPass) {
    alert("New passwords do not match");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.password !== oldPass) {
    alert("Current password is incorrect");
    return;
  }

  // Update password
  user.password = newPass;
  localStorage.setItem("user", JSON.stringify(user));

  alert("Password updated successfully");

  // Clear inputs
  document.getElementById("oldPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

// Logout
function logout() {
  localStorage.removeItem("user");
  alert("Logged out successfully");
  window.location.href = "index.html";
}
