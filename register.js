document.getElementById("register-form").addEventListener("submit", register);

function register(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  if (!username || !email || !password || !confirmPassword) {
    showModal("Error", "Please fill all fields.");
    return;
  }

  if (password !== confirmPassword) {
    showModal("Error", "Passwords do not match.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    showModal("Error", "This email is already registered.");
    return;
  }

  users.push({
    username,
    email,
    password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  showModal("Success", "Account created successfully.");

  window.location.href = "login.html";
}
function showModal(title, text) {
  document.getElementById("register-modal-title").textContent = title;
  document.getElementById("register-modal-text").textContent = text;

  document.getElementById("register-modal").classList.remove("hidden");
}

function closeRegisterModal() {
  document.getElementById("register-modal").classList.add("hidden");
}
