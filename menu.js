function filterMenu(category, button) {
  const cards = document.querySelectorAll(".food-card");
  const noItems = document.getElementById("no-items");

  let visibleCount = 0;

  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Active Button
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("bg-[#D4AF37]", "text-black");
  });

  button.classList.add("bg-[#D4AF37]", "text-black");

  // Empty Category Message
  if (visibleCount === 0) {
    noItems.classList.remove("hidden");
  } else {
    noItems.classList.add("hidden");
  }
}
AOS.init();

const reviews = [
  {
    text: "The best dining experience I've had in years. Every dish was exceptional.",
    name: "Michael Carter",
    role: "Food Critic",
  },
  {
    text: "Absolutely incredible service and amazing food. I will definitely come back again.",
    name: "Emma Wilson",
    role: "Restaurant Blogger",
  },
  {
    text: "A perfect combination of luxury atmosphere and unforgettable flavors.",
    name: "James Anderson",
    role: "Food Enthusiast",
  },
];

let current = 0;

setInterval(() => {
  const text = document.getElementById("review-text");
  const name = document.getElementById("review-name");
  const role = document.getElementById("review-role");

  // Fade Out
  text.classList.add("opacity-0", "translate-y-4");
  name.classList.add("opacity-0", "translate-y-4");
  role.classList.add("opacity-0", "translate-y-4");

  setTimeout(() => {
    current = (current + 1) % reviews.length;

    text.textContent = reviews[current].text;
    name.textContent = reviews[current].name;
    role.textContent = reviews[current].role;

    // Fade In
    text.classList.remove("opacity-0", "translate-y-4");
    name.classList.remove("opacity-0", "translate-y-4");
    role.classList.remove("opacity-0", "translate-y-4");
  }, 500);
}, 5000);
function addToCart(name, price, image, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name,
      price,
      image,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  showToast(name + " added to cart 🛒", button);
}
function showToast(message, button) {
  const toast = document.createElement("div");

  toast.textContent = message;

  toast.style.position = "absolute";
  toast.style.background = "#D4AF37";
  toast.style.color = "black";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "15px";
  toast.style.fontWeight = "bold";
  toast.style.zIndex = "9999";
  toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";

  const rect = button.getBoundingClientRect();

  toast.style.left = window.scrollX + rect.left + "px";
  toast.style.top = window.scrollY + rect.top - 60 + "px";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

updateCartCount();