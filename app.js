//getElementByTagName()
//node-list = array-list like objects
//must use index for specific items in tag
//length property but not array methods

//elements selection:
const headings = document.getElementsByTagName("h2");
const olSection = document.getElementsByTagName("ol");
const fruits = document.getElementsByTagName("li");

//elements modifications:
headings[0].style.color = "magenta";
headings[0].style.fontFamily = "Comic Sans MS";
