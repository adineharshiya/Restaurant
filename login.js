document.getElementById("login-form").addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));

    document.getElementById("success-modal").classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    document.getElementById("error-modal").classList.remove("hidden");
  }
}

function closeErrorModal() {
  document.getElementById("error-modal").classList.add("hidden");
}
