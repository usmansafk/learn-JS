//submit event lister
//prevent default
//how to get a value

const form = document.getElementById("form");
const name = document.getElementById("name"); //to grab the values, you can grab the value property of INPUTS
const password = document.getElementById("password"); //to grab the values, you can grab the value property of INPUTS

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevents refresh
  console.log("Form Submitted");
  console.log("Username:", name.value);
  console.log("Password:", password.value);
});
