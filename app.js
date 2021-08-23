//Key Events
//this is often used with forms, in which you are listening for keys being pressed
//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released

const nameInput = document.getElementById("name");

nameInput.addEventListener("keypress", function () {
  console.log("a key was pressed and released"); //RUNS 3RD
});
nameInput.addEventListener("keydown", function () {
  console.log("a key was pressed down"); //RUNS 1ST - THIS RUNS AS LONG AS THE KEY IS HELD DOWN
});
nameInput.addEventListener("keyup", function () {
  // console.log("a key was released"); //RUNS 2ND
  // console.dir(nameInput);// can see all the properties available for element
  console.log(nameInput.value); // THIS IS EXTREMELY USEFUL FOR FUTURE PROJECTS! - gives you access to the entered value by user
});
