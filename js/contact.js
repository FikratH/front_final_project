const cart_btn_header = document.querySelector(".header_cart_number");
const btnToTop = document.querySelector(".button_top");
const usernameField = document.querySelector(".username");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    currentUser.username == null
      ? "No Active User"
      : `Hi, ${currentUser.username}!`;
  console.log("Current user => " + currentUser.username);
  console.log("All users ", users);
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
