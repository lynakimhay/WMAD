function save() {
  const email = document.getElementById("email").value;
  localStorage.setItem("email",email)
  // Save the email above email to local storage
}

function display() {
  // ==change code only here== //
  const email =" localStorage.getItem(email)"; // get an email from local storage to
  // ==change code only here== //


  const display = document.getElementById("display-email");
  display.innerHTML = email;
}
