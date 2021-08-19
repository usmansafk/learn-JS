//getAttribute() and setAttribute() methods

//li one
const first = document.querySelector(".first"); //selectors
const classValue = first.getAttribute("class"); //get attribute prints value of class here
const idValue = first.getAttribute("id"); //get attribute prints value of id here
console.log(first); //prints out whole html lime
console.log(classValue);
console.log(idValue);
console.log(first.textContent); //prints whats inside the element

//a tag
// const link = document.getElementById("link"); //selectors or...
const link = document.querySelector("#link"); //selectors - can do any selector
const showLink = link.getAttribute("href"); //get attribute prints value of href here
console.log(link); //prints out whole html line
console.log(showLink); //www.google.co.uk

//li two
const last = link.nextElementSibling; //using previously covered property
last.setAttribute("class", "first"); // first param is type of element, second is the value!!
last.textContent = "I also have the class of first now"; //UPDATING THE TEXT INSIDE THE 2ND LI ITEM
console.log(last); //prints out whole html line
console.log(last.textContent);

const totalLi = document.querySelectorAll(".first"); //we now have 2 .first class elements in node list
console.log(totalLi);
