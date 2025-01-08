const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const passkey = document.querySelector("#passkey").value;
  console.log("Passkey entered: ", passkey);
});
