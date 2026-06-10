function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("error-modal").classList.remove("hidden");
    return;
  }

  document.getElementById("contact-modal").classList.remove("hidden");

  event.target.reset();
}

function closeContactModal() {
  document.getElementById("contact-modal").classList.add("hidden");
}

function closeErrorModal() {
  document.getElementById("error-modal").classList.add("hidden");
}