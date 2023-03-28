const loginInputs = document.querySelectorAll(".login_inputs_input_input");
const loginCheckbox = document.querySelector(
  ".login_inputs_check_check_checkbox"
);
const loginButton = document.querySelector(".login_footer_button");
let users = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);
console.log(users);
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let loginInputsValue = [];
  loginInputs.forEach((input) => {
    loginInputsValue.push(input.value);
  });
  console.log({ loginInputsValue });
  if (
    loginInputsValue[0] === null ||
    loginInputsValue[0].match(/^ *$/) !== null
  ) {
    loginInputs[0].style.border = "1px solid red";
  } else if (
    loginInputsValue[1] === null ||
    loginInputsValue[1].match(/^ *$/) !== null
  ) {
    loginInputs[1].style.border = "1px solid red";
  } else {
    if (
      users !== null &&
      users.some(
        (user) =>
          user.email.toLowerCase() === loginInputsValue[0].toLowerCase() &&
          user.password === loginInputsValue[1]
      )
    ) {
      currentUser = users.find(
        (user) =>
          user.email.toLowerCase() === loginInputsValue[0].toLowerCase() &&
          user.password === loginInputsValue[1]
      );
      console.log(currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "../index.html";
      alert("Logged in");
    } else if (
      users === null ||
      users.every(
        (user) => user.email.toLowerCase() !== loginInputsValue[0].toLowerCase()
      )
    ) {
      alert("User not found");
    } else {
      alert("Incorrect email or password");
    }
  }
});
