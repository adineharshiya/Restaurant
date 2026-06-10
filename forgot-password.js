let resetCode = "";
let resetEmail = "";

function sendCode() {

  const email =
    document.getElementById("email").value.trim();

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user =
    users.find(user => user.email === email);

  if (!user) {

    alert("Email not found");

    return;
  }

  resetEmail = email;

  resetCode =
    Math.floor(
      100000 + Math.random() * 900000
    ).toString();

  document.getElementById(
    "generated-code"
  ).textContent = resetCode;

  document.getElementById(
    "code-section"
  ).classList.remove("hidden");
}

function verifyCode() {

  const enteredCode =
    document.getElementById("user-code").value;

  if (enteredCode === resetCode) {

    document.getElementById(
      "reset-section"
    ).classList.remove("hidden");

  } else {

    alert("Wrong Code");

  }
}

function resetPassword() {

  const newPassword =
    document.getElementById("new-password").value;

  let users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user =
    users.find(
      user => user.email === resetEmail
    );

  if (user) {

    user.password = newPassword;

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Password Changed");

    window.location.href =
      "login.html";
  }
}