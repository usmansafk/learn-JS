//Mouse-Events
// click - fires after full action occurs (will be used in most cases)
//  these are very specific :
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element (when you hover over the element)
// mouseleave - moved onto out of an element (when you hover off the element)

const heading = document.querySelector("h1");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  console.log("you clicked me");
}); //FIRES 3RD
button.addEventListener("mousedown", function () {
  console.log("down");
}); //FIRES 1ST
button.addEventListener("mouseup", function () {
  console.log("up");
}); //FIRES 2ND

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
//voila! you just learned how to create hover effect using js!
