//Truthy/Falsy

// "", '', ``, 0, -0, NaN, false, null, undefined
// The above are all falsy, everything else is truthy

const bool1 = true;
const bool2 = 2 > 1;

const text = "usman";

if (text) {
  console.log("hey the value is truthy");
} else {
  console.log("hey the value is falsy");
}

// if (bool1) console.log(`Hey it works!`);
// if (bool2) console.log(`Hey it also works!`);
