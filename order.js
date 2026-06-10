let quantity = 1;

const quantityElement = document.getElementById("quantity");

if (document.getElementById("plus-btn")) {
  document.getElementById("plus-btn").addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
  });
}

if (document.getElementById("minus-btn")) {
  document.getElementById("minus-btn").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  });
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");

if (cartContainer) {
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-3xl text-[#D4AF37] font-bold">
          Your cart is empty
        </h2>
      </div>
    `;
  } else {
    cart.forEach((item) => {
      cartContainer.innerHTML += `
    <div class="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-3xl p-6 mb-6">

      <div class="flex flex-col md:flex-row gap-6 items-center">

        <img
          src="${item.image}"
          class="w-40 h-40 object-cover rounded-2xl"
        >

        <div class="flex-1">

          <h2 class="text-3xl font-bold text-[#D4AF37]">
            ${item.name}
          </h2>

          <p class="text-2xl mt-4 text-white">
            $${item.price}
          </p>

          <div class="flex items-center gap-4 mt-4">

  <button
    onclick="decreaseQuantity('${item.name}')"
    class="w-10 h-10 rounded-full bg-red-500 text-white font-bold hover:scale-110 transition"
  >
    -
  </button>

  <span class="text-xl font-bold text-white">
    ${item.quantity}
  </span>

  <button
    onclick="increaseQuantity('${item.name}')"
    class="w-10 h-10 rounded-full bg-green-500 text-white font-bold hover:scale-110 transition"
  >
    +
  </button>

</div>

        </div>

      </div>

    </div>
  `;
    });
  }
}

console.log(cart);

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);

document.getElementById("cart-count").textContent = totalItems;
}
updateCartCount();
function increaseQuantity(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find((item) => item.name === name);

  if (item) {
    item.quantity++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
}

function decreaseQuantity(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find((item) => item.name === name);

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.name !== name);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
}
const cartTotal = document.getElementById("cart-total");

if (cartTotal && cart.length > 0) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartTotal.innerHTML = `
    <h2 class="text-3xl font-bold text-[#D4AF37] mb-4">
      Total: $${total.toFixed(2)}
    </h2>

    <button
  onclick="checkout()"
  class="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
>
  Checkout
</button>
  `;
}
function checkout() {
  document.getElementById("success-modal").classList.remove("hidden");

  localStorage.removeItem("cart");
}

function closeModal() {
  document.getElementById("success-modal").classList.add("hidden");

  location.reload();
}
