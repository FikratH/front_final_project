const signupInputs = document.querySelectorAll(".signup_inputs_input_input");
const signupButton = document.querySelector(".signup_footer_button");
const usernameRegex = /^[a-zA-Z0-9]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let isCorrect = false;
let users = JSON.parse(localStorage.getItem("users"));
console.log(users);

signupButton.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  signupInputs.forEach((input) => {
    input.style.border = "1px solid #c9c9c9";
  });
  let signupInputsValue = [];
  signupInputs.forEach((input) => {
    signupInputsValue.push(input.value);
  });
  console.log({ signupInputsValue });
  if (
    signupInputsValue[0] === null ||
    signupInputsValue[0].match(/^ *$/) !== null ||
    signupInputsValue[0].match(usernameRegex) === null
  ) {
    signupInputs[0].style.border = "1px solid red";
  } else if (
    signupInputsValue[1] === null ||
    signupInputsValue[1].match(/^ *$/) !== null ||
    signupInputsValue[1].match(emailRegex) === null
  ) {
    signupInputs[1].style.border = "1px solid red";
  } else if (
    signupInputsValue[2] === null ||
    signupInputsValue[2].match(/^ *$/) !== null ||
    signupInputsValue[2].match(passwordRegex) === null
  ) {
    signupInputs[2].style.border = "1px solid red";
  } else if (
    signupInputsValue[3] === null ||
    signupInputsValue[3].match(/^ *$/) !== null ||
    signupInputsValue[3] !== signupInputsValue[2]
  ) {
    signupInputs[3].style.border = "1px solid red";
  } else if (
    users !== null &&
    users.some((user) => user.email === signupInputsValue[1])
  ) {
    alert("Email already exists");
  } else {
    signupInputs.forEach((input) => {
      input.value = "";
      input.style.border = "1px solid green";
    });
    if (users === null) {
      users = [];
    }
    users.push({
      id: users.length + 1,
      username: signupInputsValue[0],
      email: signupInputsValue[1],
      password: signupInputsValue[2],
      cart: [],
    });
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
  }
});
