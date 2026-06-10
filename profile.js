function changeName() {
  const newName = document.getElementById("new-name").value.trim();

  if (!newName) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const user = users.find((u) => u.email === currentUser.email);

  if (!user) return;

  user.username = newName;

  currentUser.username = newName;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  loadUserInfo();

  clearProfileInputs();

  showSuccessModal("Name Updated", "Your name has been updated successfully.");
}
loadUserInfo();

function changeEmail() {
  const newEmail = document.getElementById("new-email").value.trim();

  if (!newEmail) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const user = users.find((u) => u.email === currentUser.email);

  if (!user) return;

  user.email = newEmail;

  currentUser.email = newEmail;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  loadUserInfo();

  clearProfileInputs();

  showSuccessModal(
    "Email Updated",
    "Your email has been updated successfully.",
  );
}
loadUserInfo();
function changePassword() {
  const newPassword = document.getElementById("new-password").value.trim();

  if (!newPassword) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const user = users.find((u) => u.email === currentUser.email);

  if (!user) return;

  user.password = newPassword;

  currentUser.password = newPassword;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  clearProfileInputs();
  showSuccessModal(
    "Password Updated",
    "Your password has been updated successfully.",
  );
}
loadUserInfo();
function logout() {
  localStorage.removeItem("currentUser");

  window.location.href = "login.html";
}
function loadUserInfo() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) return;

  document.getElementById("current-name").textContent = currentUser.username;

  document.getElementById("current-email").textContent = currentUser.email;
}

loadUserInfo();
function showSuccessModal(title, message) {
  document.getElementById("success-title").textContent = title;
  document.getElementById("success-text").textContent = message;

  document.getElementById("success-modal").classList.remove("hidden");
}

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}
function clearProfileInputs() {
  document.getElementById("new-name").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("new-password").value = "";
}
