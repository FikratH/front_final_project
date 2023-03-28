let dataArr = [
  {
    id: 1,
    img: "./assets/images/indexPage/trending1.jpg",
    category: "Men",
    title: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 2,
    img: "./assets/images/indexPage/trending2.jpg",
    title: "Cashmere Tank + Bag",
    category: "Women",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 3,
    img: "./assets/images/indexPage/trending3.jpg",
    title: "Cashmere Tank + Bag",
    category: "Baby",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 4,
    img: "./assets/images/indexPage/trending4.jpg",
    title: "Cashmere Tank + Bag",
    category: "Fashion",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 5,
    img: "./assets/images/indexPage/trending1.jpg",
    category: "Men",
    title: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 6,
    img: "./assets/images/indexPage/trending2.jpg",
    title: "Cashmere Tank + Bag",
    category: "Women",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 7,
    img: "./assets/images/indexPage/trending3.jpg",
    title: "Cashmere Tank + Bag",
    category: "Baby",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 8,
    img: "./assets/images/indexPage/trending4.jpg",
    title: "Cashmere Tank + Bag",
    category: "Fashion",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 9,
    img: "./assets/images/indexPage/trending1.jpg",
    category: "Men",
    title: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 10,
    img: "./assets/images/indexPage/trending2.jpg",
    title: "Cashmere Tank + Bag",
    category: "Women",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 11,
    img: "./assets/images/indexPage/trending3.jpg",
    title: "Cashmere Tank + Bag",
    category: "Baby",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 12,
    img: "./assets/images/indexPage/trending4.jpg",
    title: "Cashmere Tank + Bag",
    category: "Fashion",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 13,
    img: "./assets/images/indexPage/trending1.jpg",
    category: "Men",
    title: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 14,
    img: "./assets/images/indexPage/trending2.jpg",
    title: "Cashmere Tank + Bag",
    category: "Women",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 15,
    img: "./assets/images/indexPage/trending3.jpg",
    title: "Cashmere Tank + Bag",
    category: "Baby",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 16,
    img: "./assets/images/indexPage/trending4.jpg",
    title: "Cashmere Tank + Bag",
    category: "Fashion",
    price: "$98.00",
    oldPrice: "$120.00",
  },
];

let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
    cart: [],
  },
];
const cart_btn_header = document.querySelector(".header_cart_number");
const btnToTop = document.querySelector(".button_top");
const usernameField = document.querySelector(".username");
let currentUser = "";
let cart;
let currentCategory;
const filterBtns = document.querySelectorAll(
  ".main_products_trending_title_categories_category"
);
const slider_wrapper = document.querySelector(
  ".main_products_trending_boxes_wrapper_list"
);
const sliderItems = document.querySelector(".main_items_boxes_wrapper_list");

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  if (
    JSON.parse(localStorage.getItem("currentUser")) == null ||
    localStorage.getItem("currentUser") == ""
  ) {
    currentUser = "";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  } else {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
  }
  console.log("Current user =>", currentUser);
  if (currentUser != "") {
    cart = currentUser.cart;
    cart_btn_header.innerHTML = cart.length;
    cart_btn_header.innerHTML = cart.length;
    console.log("Current user's cart => ", cart);
  } else {
    cart = null;
    cart_btn_header.innerHTML = 0;
  }
  usernameField.innerHTML =
    currentUser.username == null
      ? "No Active User"
      : `Hi, ${currentUser.username}!`;
  console.log("Current user => " + currentUser.username);
  console.log("All users ", users);
  localStorage.setItem("users", JSON.stringify(users));
  slider_wrapper.innerHTML = "";
  sliderItems.innerHTML = "";
  dataArr.forEach((item) => {
    slider_wrapper.innerHTML += `
    <li class="splide__slide" data-category="${item.category.toLowerCase()}" data-id="${dataArr.indexOf(
      item
    )}">
    <div class="main_products_trending_boxes_box">
      <div class="main_products_trending_boxes_box_image">
        <img
          src="${item.img}"
          alt=""
          class="main_products_trending_boxes_box_image_img"
        />
        <div
          class="main_products_trending_boxes_box_image_btns"
        >
          <a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn cart_btn"
          >
            <i class="fa-solid fa-cart-shopping"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-heart"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-magnifying-glass-plus"></i
          ></a>
        </div>
      </div>
      <div class="main_products_trending_boxes_box_desc">
        <a
          href="#"
          class="main_products_trending_boxes_box_desc_title"
          >${item.title} for ${item.category}</a
        >
        <span
          class="main_products_trending_boxes_box_desc_price"
        >
          ${item.price}
          <span
            class="main_products_trending_boxes_box_desc_price_old"
            >${item.oldPrice}</span
          >
        </span>
      </div>
    </div>
  </li>
    `;
    sliderItems.innerHTML += `
    <li class="splide__slide" data-category="${item.category.toLowerCase()}" data-id="${dataArr.indexOf(
      item
    )}">
    <div class="main_products_trending_boxes_box">
      <div class="main_products_trending_boxes_box_image">
        <img
          src="${item.img}"
          alt=""
          class="main_products_trending_boxes_box_image_img"
        />
        <div
          class="main_products_trending_boxes_box_image_btns"
        >
          <a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn cart_btn"
          >
            <i class="fa-solid fa-cart-shopping"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-heart"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-magnifying-glass-plus"></i
          ></a>
        </div>
      </div>
      <div class="main_products_trending_boxes_box_desc">
        <a
          href="#"
          class="main_products_trending_boxes_box_desc_title"
          >${item.title} for ${item.category}</a
        >
        <span
          class="main_products_trending_boxes_box_desc_price"
        >
          ${item.price}
          <span
            class="main_products_trending_boxes_box_desc_price_old"
            >${item.oldPrice}</span
          >
        </span>
      </div>
    </div>
  </li>
    `;
  });

  currentCategory = "men";

  new Splide("#trending", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    pagination: false,
    width: "100%",
    breakpoints: {
      992: {
        perPage: 3,
      },
      778: {
        perPage: 2,
        arrows: false,
      },
    },
  }).mount();

  new Splide("#items", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    pagination: false,
    width: "100%",
    breakpoints: {
      992: {
        perPage: 3,
      },
      778: {
        perPage: 2,
        arrows: false,
      },
    },
  }).mount();

  new Splide("#testimonials", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    width: "100%",
  }).mount();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    currentCategory = e.target.dataset.category;
    e.target.classList.add("active");
    filterProducts(currentCategory);
  });
});

function filterProducts(category) {
  const filteredProducts = dataArr.filter((item) => {
    return item.category.toLowerCase() === category;
  });
  console.log(filteredProducts);
  slider_wrapper.innerHTML = "";
  filteredProducts.forEach((item) => {
    slider_wrapper.innerHTML += `
    <li class="splide__slide" data-category="${item.category.toLowerCase()}" data-id="${dataArr.indexOf(
      item
    )}">
    <div class="main_products_trending_boxes_box">
      <div class="main_products_trending_boxes_box_image">
        <img
          src="${item.img}"
          alt=""
          class="main_products_trending_boxes_box_image_img"
        />
        <div
          class="main_products_trending_boxes_box_image_btns"
        >
          <a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn cart_btn"
          >
            <i class="fa-solid fa-cart-shopping"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-heart"></i></a
          ><a
            href="#" onclick="return false" 
            class="main_products_trending_boxes_box_image_btns_btn"
            ><i class="fa-solid fa-magnifying-glass-plus"></i
          ></a>
        </div>
      </div>
      <div class="main_products_trending_boxes_box_desc">
        <a
          href="#"
          class="main_products_trending_boxes_box_desc_title"
          >${item.title} for ${item.category}</a
        >
        <span
          class="main_products_trending_boxes_box_desc_price"
        >
          ${item.price}
          <span
            class="main_products_trending_boxes_box_desc_price_old"
            >${item.oldPrice}</span
          >
        </span>
      </div>
    </div>
  </li>
    `;
  });

  new Splide("#trending", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    breakpoints: {
      992: {
        perPage: 3,
      },
      778: {
        perPage: 2,
        arrows: false,
      },
    },
  }).mount();
}

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

slider_wrapper.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cart_btn") ||
    e.target.parentElement.classList.contains("cart_btn")
  ) {
    const id = e.target.closest("li").dataset.id;
    const product = dataArr[id];
    if (cart.includes(product)) {
      alert("This product is already in your cart");
    } else {
      cart.push(product);
      currentUser.cart = cart;
      users[currentUser.id - 1].cart = cart;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      cart_btn_header.innerHTML = cart.length;
      console.log("Current user after click", currentUser);
      console.log("All users after click", users);
    }
  }
});
sliderItems.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cart_btn") ||
    e.target.parentElement.classList.contains("cart_btn")
  ) {
    const id = e.target.closest("li").dataset.id;
    const product = dataArr[id];
    if (cart != null) {
      if (cart.includes(product)) {
        alert("This product is already in your cart");
      } else {
        cart.push(product);
        currentUser.cart = cart;
        users[currentUser.id - 1].cart = cart;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        cart_btn_header.innerHTML = cart.length;
        console.log("Current user after click", currentUser);
        console.log("All users after click", users);
      }
    } else {
      alert("Please login to add products to cart");
    }
  }
});
