//Navigate the DOM - previousSibling and nextSibling
//returns whitespace

// Siblings are those which are equal in the DOM structure
// When you use these properties, the first entry will be a empty text whitespace. Hence you must use the property again to get the correct element:

const first = document.querySelector(".first"); //notice -- don't forget the . as it references a class
// console.log(first); // always log if you are ever unsure and to make sure you have selected properly and/or get the correct data set

// let second = first.nextSibling;
//lets say, you want to see the next sibling to element, use nextSibling property
// console.log(second);
//this will originally return text whitespace

//hence:
const second = first.nextSibling.nextSibling;
second.style.color = "red"; // changing the colour of list item 2 to red
console.log(second);

const last = document.querySelector("#last");
const third = (last.previousSibling.previousSibling.style.color = "blue"); // changing the colour of list item 3 to blue
console.log(third);
