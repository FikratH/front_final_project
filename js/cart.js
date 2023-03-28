const cart_btn_header = document.querySelector(".header_cart_number");
const btnToTop = document.querySelector(".button_top");
const usernameField = document.querySelector(".username");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let cart = [];
let users = JSON.parse(localStorage.getItem("users"));
let cartTableBody = document.querySelector(".cart_main_body_table_body");
let subtotal = document.querySelector(".subtotal");
console.log({
  cart_btn_header,
  btnToTop,
  usernameField,
  currentUser,
  cart,
  users,
  cartTableBody,
});

document.addEventListener("DOMContentLoaded", () => {
  usernameField.innerHTML =
    currentUser === null || currentUser === ""
      ? "No Active User"
      : `Hi, ${currentUser.username}!`;
  console.log(
    "Current user => " +
      (currentUser === null ? "no user" : currentUser.username)
  );
  console.log("All users ", users);

  if (currentUser === null || currentUser === "") {
    cartTableBody.innerHTML = `
    <tr class="cart_main_body_table_body_row">
    <td
      class="cart_main_body_table_body_row_td cart_main_body_table_body_row_product"
    >
    <p class="cart_main_body_table_body_row_product_p">Please <a href="../html/login.html" class="signup_footer_login_link">Login</a> to use cart</p>
    </td>
    <td class="cart_main_body_table_body_row_td"></td>
    <td
      class="cart_main_body_table_body_row_td cart_main_body_table_header_row_quantity"
    >
    </td>
    <td class="cart_main_body_table_body_row_td"></td>
  </tr>
    `;
  } else {
    cart = currentUser.cart;
    cart_btn_header.innerHTML = cart.length;
    cart_btn_header.innerHTML = cart.length;
    console.log("Current user's cart => ", cart);
    cartTableBody.innerHTML = "";
    cart.forEach((item) => {
      cartTableBody.innerHTML += `
        <tr class="cart_main_body_table_body_row">
        <td
          class="cart_main_body_table_body_row_td cart_main_body_table_body_row_product"
        >
        <p class="cart_main_body_table_body_row_product_p">${item.title} for ${
        item.category
      }</p>
        </td>
        <td class="cart_main_body_table_body_row_td price">${item.price}</td>
        <td
          class="cart_main_body_table_body_row_td cart_main_body_table_header_row_quantity"
        >
          <div class="cart_main_body_table_body_row_td_quantity">
            <input
              type="number"
              class="cart_main_body_table_body_row_td_quantity_input"
              value="1"
            />
            <div
              class="cart_main_body_table_body_row_td_quantity_buttons"
            >
        </button>
        <button
          class="cart_main_body_table_body_row_td_quantity_buttons_btn plus"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
              <button
                class="cart_main_body_table_body_row_td_quantity_buttons_btn minus"
              >
                <i class="fa-solid fa-minus"></i>
            </div>
          </div>
        </td>
        <td class="cart_main_body_table_body_row_td item_total_price">$${parseFloat(
          item.price.replace("$", "") * 1
        )
          .toFixed(2)
          .toString()}</td>
      </tr>
        `;
    });
  }
  console.log(subtotal);
  let subtotalPrice = 0;

  cart.forEach((item) => {
    subtotalPrice += parseFloat(item.price.replace("$", ""));
  });
  subtotal.innerHTML = `$${subtotalPrice.toFixed(2).toString()}`;
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

cartTableBody.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("plus") ||
    e.target.classList.contains("fa-plus")
  ) {
    if (e.target.classList.contains("fa-plus")) {
      e.target.parentElement.parentElement.parentElement.children[0].value++;
      let parentTd =
        e.target.parentElement.parentElement.parentElement.parentElement;
      let priceTd = parentTd.previousElementSibling;
      let totalTd = parentTd.nextElementSibling;
      let priceTdValue = priceTd.innerHTML.replace("$", "");
      let quantity =
        e.target.parentElement.parentElement.parentElement.children[0].value;
      let price = parseFloat(priceTdValue) * parseFloat(quantity);
      totalTd.innerHTML = `$${price.toFixed(2).toString()}`;
    } else {
      e.target.parentElement.parentElement.children[0].value++;
      let parentTd = e.target.parentElement.parentElement.parentElement;
      let priceTd = parentTd.previousElementSibling;
      let totalTd = parentTd.nextElementSibling;
      let priceTdValue = priceTd.innerHTML.replace("$", "");
      let quantity = e.target.parentElement.parentElement.children[0].value;
      let price = parseFloat(priceTdValue) * parseFloat(quantity);
      totalTd.innerHTML = `$${price.toFixed(2).toString()}`;
      console.log(price);
    }
    let cartTotalPrices = document.querySelectorAll(".item_total_price");
    subtotalPrice = 0;
    cartTotalPrices.forEach((item) => {
      subtotalPrice += parseFloat(item.innerHTML.replace("$", ""));
    });
    subtotal.innerHTML = `$${subtotalPrice.toFixed(2).toString()}`;
  } else if (
    e.target.classList.contains("minus") ||
    e.target.classList.contains("fa-minus")
  ) {
    console.log(e.target);
    if (e.target.classList.contains("fa-minus")) {
      if (
        e.target.parentElement.parentElement.parentElement.children[0].value > 1
      ) {
        e.target.parentElement.parentElement.parentElement.children[0].value--;
        let parentTd =
          e.target.parentElement.parentElement.parentElement.parentElement;
        let priceTd = parentTd.previousElementSibling;
        let totalTd = parentTd.nextElementSibling;
        let priceTdValue = priceTd.innerHTML.replace("$", "");
        let quantity =
          e.target.parentElement.parentElement.parentElement.children[0].value;
        let price = parseFloat(priceTdValue) * parseFloat(quantity);
        totalTd.innerHTML = `$${price.toFixed(2).toString()}`;
        console.log(price);
      }
    } else {
      if (e.target.parentElement.parentElement.children[0].value > 1) {
        e.target.parentElement.parentElement.children[0].value--;
        let parentTd = e.target.parentElement.parentElement.parentElement;
        let priceTd = parentTd.previousElementSibling;
        let totalTd = parentTd.nextElementSibling;
        let priceTdValue = priceTd.innerHTML.replace("$", "");
        let quantity = e.target.parentElement.parentElement.children[0].value;
        let price = parseFloat(priceTdValue) * parseFloat(quantity);
        totalTd.innerHTML = `$${price.toFixed(2).toString()}`;
        console.log(price);
      }
    }
    let cartTotalPrices = document.querySelectorAll(".item_total_price");
    subtotalPrice = 0;
    cartTotalPrices.forEach((item) => {
      subtotalPrice += parseFloat(item.innerHTML.replace("$", ""));
    });
    subtotal.innerHTML = `$${subtotalPrice.toFixed(2).toString()}`;
  }
});
