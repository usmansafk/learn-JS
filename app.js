//Navigate the DOM - previousElementSibling and nextElementSibling
//returns NO whitespace

//subtle difference and **easier** from previousSibling and nextSibling!!!
// You can grab the next element immediately with ease and not worry about white space

const first = document.querySelector(".first");
first.nextElementSibling.style.color = "green";
const last = document.querySelector("#last");
last.previousElementSibling.style.color = "blue";
