const formEl = document.querySelector("#email-form");
const emailEl = document.querySelector("#email");
const errorEl = document.querySelector("#error-msg");

formEl.addEventListener("submit", e => {
  e.preventDefault();

  if (!isEmail(emailEl.value.trim())) {
    emailEl.className = "error";
    errorEl.innerText = "Please provide a valid email address";
    errorEl.style.display = "block";
  } else {
    emailEl.className = "valid";
    errorEl.style.display = "none";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
});
