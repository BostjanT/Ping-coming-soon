const input = document.querySelector("#email");
const submitBtn = document.querySelector(".btn-submit");
const errorTxt = document.querySelector(".error-msg");

submitBtn.addEventListener("click", () => {
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(emailFormat)) {
    input.value = "Thank you";
    setTimeout(() => {
      input.value = "";
    }, 1000);

    errorTxt.classList.remove("error");
    input.classList.remove("error-border");
    errorTxt.innerHTML = "";

    return true;
  } else {
    errorTxt.classList.add("error");
    input.classList.add("error-border");
    errorTxt.innerHTML = "Please provide a valid email address";
  }
});
