//nodeValue and textContent
//both do the same thing - allow you to access the text property within the element

const item = document.getElementById("special");

//nodeValue is a bit more tricky
const value = item.firstChild.nodeValue;
console.log(value);

//textContent is easier as it does not have the extra step of looking via child
const easyValue = item.textContent;
console.log(easyValue); // preferred/ easier
