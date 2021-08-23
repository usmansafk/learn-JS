// prepend()
// innerText

//create a h2 in front of the current h1
const dynamicHeading = document.createElement("h2");
dynamicHeading.innerText = "I am a dynamic heading. Lol, this is easier! ";
document.body.prepend(dynamicHeading);
