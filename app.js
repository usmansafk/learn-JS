// CurrentTarget vs Target
// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occurred

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  // forEach is used to select EACH button with the given class
  btn.addEventListener("click", function (e) {
    console.log(`currentTarget`, e.currentTarget); //currentTarget- whole element which eventlistenr is attached with
    e.currentTarget.style.color = "black";
    console.log("-------------------------------------");
    console.log(`target`, e.target); //target - specific element which was clicked on
    event.target.style.color = "green";
  });
});
