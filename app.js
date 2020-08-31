var inputEmail = document.querySelector("#email");
var inputPassword = document.querySelector("#password");
var loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", (event) => {
  alert(
    `Mon email est : ${inputEmail["value"]} et mon mot de passe est ${inputPassword["value"]}`
  );
});
