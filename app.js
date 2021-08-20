// classList and className
//How to add Css classes dynamically to our element using JS
// they allow you to apply/move/check if classes on an element

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
// console.log(classValue);

second.className = "text"; //adds text CSS class to the second heading,
second.className = "colors"; // if you want to add another css class to it later in the code, say text AND colors, you CAN'T do it this way as it simply over rides
second.className = "text colors"; // you can do both like this if you know the styling right away

//Hence use classList - example on third heading:
third.classList.add("colors");
//some code here...
third.classList.add("text"); //later on the code you can also add this css using classLists .add() method
third.classList.add("text", "colors"); // to add multiple classes im the one line using classList, separate with comma ,
third.classList.remove("text"); // can also remove - removes text

let result = third.classList.contains("colors"); // another classList method to see if element exists
console.log(result); // true
if (result) {
  console.log("class exists in element"); // prints tthis
} else {
  console.log("class does not exists in element");
}

console.log(third.classList); //you can view all the classes on element through logging
