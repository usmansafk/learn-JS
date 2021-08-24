//Event Object Argument, e evt
// provides info about triggered event
// it is a GIANT object with many properties and methods
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.getElementById("head");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

// heading.addEventListener("click", function () {
//   heading.classList.add("blue"); // since you spelt heading wrong with an s, it wont work!
// });

//Hence, you can use event object by using an e paramter and it will always select the element that has then event lister attached to it:
heading.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event); // can see all the methods and properties in event object
  console.log(event.currentTarget); //this is a useful property - shows you the current element that was clicked on and points to the property that has the addEventListener attached to it
  console.log(this); //Note: this keyword is tricky! will output same as event objects .currentTarget but will NOT work if it is an arrow functions
});

//event.currentTarget and event.type
btn.addEventListener("click", function (e) {
  console.log(e); // can see all the methods and properties in event object
  console.log(e.currentTarget); //this is a useful property - shows you the current element that was clicked on and points to the property that has the addEventListener attached to it
  console.log(e.type); //shows you what type of event it is - in this case: click
});

//e.preventDefault() method
function someFunc(e) {
  e.preventDefault(); //prevents the default behaviour - VERY USEFUL TO PREVENT PAGE REFRESH ! useful for forms etc.
}
link.addEventListener("click", someFunc);
