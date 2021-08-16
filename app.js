//String Properties & Methods
let text = " Usman Sajid";
//Properties
let result = text.length;
console.log(result);

//Methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0)); //strings are also 0 index based
console.log(text.charAt(10)); // we know the length of string via length property; less -1; will returns the last char, "d"
console.log(text.charAt(text.length - 1)); // same as above, however in one line and not hardcoded! Get last char.
console.log(text.indexOf("z")); //if the string is not there, it will print -1
console.log(text.trim()); // gets rid of white space
console.log(text.startsWith("Bob")); // output false
console.log(text.trim().toLowerCase().startsWith("usm")); //trim the white space, make it all lowercase no matter what, check to see if starts with "usm"
console.log(text.includes("an S")); //true
console.log(text.trim().slice(0, 5)); //Output: Usman//slice method creates a new string from existing(sub-string), by getting specific parts of string. The second digit argument is not included.
console.log(text.trim().slice(-5)); //Output: Sajid //slice method from end of string using negative numbers.
