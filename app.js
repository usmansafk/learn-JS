//getElementByTagName()
//node-list = array-list like objects
//must use index for specific items in tag
//length property but not array methods

//elements selection:
const headings = document.getElementsByTagName("h2");
const olSection = document.getElementsByTagName("ol");
const fruits = document.getElementsByTagName("li");

//elements modifications:
headings[5].style.color = "magenta";
headings[5].style.fontFamily = "Comic Sans MS";
headings[5].style.fontSize = "70px";

headings[6].style.color = "red";
headings[6].style.fontWeight = "100";
headings[6].style.fontSize = "50px";

olSection[0].style.backgroundColor = "black";
olSection[0].style.fontSize = "40px";

//use the length property to find out index position:
console.log(fruits.length);

fruits[13].style.color = "red";
fruits[14].style.color = "orange";
fruits[15].style.color = "green";
fruits[16].style.color = "yellow";
fruits[17].style.color = "blue";
