const cart_btn_header = document.querySelector(".header_cart_number");
const btnToTop = document.querySelector(".button_top");
const usernameField = document.querySelector(".username");
let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
let cart = [];
let users = JSON.parse(localStorage.getItem("users"));
console.log({
  cart_btn_header,
  btnToTop,
  usernameField,
  currentUser,
  cart,
  users,
});

document.addEventListener("DOMContentLoaded", () => {
  usernameField.innerHTML =
    currentUser === null ? "No Active User" : `Hi, ${currentUser.username}!`;
  console.log(
    "Current user => " +
      (currentUser === null ? "no user" : currentUser.username)
  );
  console.log("All users ", users);

  if (currentUser != "") {
    cart = currentUser.cart;
    cart_btn_header.innerHTML = cart.length;
    cart_btn_header.innerHTML = cart.length;
    console.log("Current user's cart => ", cart);
  } else {
    cart = null;
    cart_btn_header.innerHTML = 0;
  }
});

btnToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnToTop.classList.add("active");
  } else {
    btnToTop.classList.remove("active");
  }
});
