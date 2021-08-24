// Event Bubbling Capturing
// Allows select dynamic elements that were made in js
// event propagation - order of the events are fired
// event Bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("Current Target:", e.currentTarget);
  console.log("Target:", e.target);
  if (e.target.classList.contains("link")) {
    console.log("you clicked on the link");
  }
}

function stopPropagation(e) {
  console.log("you clicked on list");
  e.stopPropagation(); // method that prevents bubbling.
}

// container.addEventListener("click", stopPropagation);
// container.addEventListener("click", showBubbling);
// list.addEventListener("click", showBubbling);
// document.addEventListener("click", showBubbling);
// window.addEventListener("click", showBubbling);

container.addEventListener("click", showBubbling, { current: true }); // the opposite of default bubbling behaviour - capturing: start from root and go down to actual element
list.addEventListener("click", showBubbling, { current: true });
document.addEventListener("click", showBubbling, { current: true });
window.addEventListener("click", showBubbling, { current: true });
