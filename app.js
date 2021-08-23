// replaceChild("new", "old")

// (How to add elements directly/ dynamically
// Steps:
// createElement("element")
// createTextNode("text content")

// element.appendChild(childElement) ---> note: they are other methods besides appendChild to place elements, like:
// replaceChild("new", "old")

const result = document.querySelector("#result");
const first = document.querySelector(".blue");

//example 1:
const bodyDiv = document.createElement("div");
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

//example 2:
const heading = document.createElement("h1");
const textHeading = document.createTextNode("Dynamic Heading");
heading.appendChild(textHeading);
heading.classList.add("red");
result.insertBefore(heading, first);

//example 3 - replaceChild()
const subHeading = document.createElement("h2");
const subHeadingText = document.createTextNode(`This is the subheading`);
subHeading.classList.add("red");
subHeading.appendChild(subHeadingText);
// result.insertBefore(subHeading, first); // instead use replaceChild()
document.body.replaceChild(subHeading, bodyDiv); // here we are replacing the previous bodyDiv with this new subHeading

console.log(result.children);
