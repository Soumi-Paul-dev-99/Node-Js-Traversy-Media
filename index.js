//commonjs module require

// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`random number: ${generateRandomNumber()}`);

// console.log(`celcius To Farenhite : ${celciusToFahrenheit(0)}`);

//es module export and import

import getPosts, { getPostLength } from "./postController.js";
console.log(getPosts());
console.log(`Posts Length: ${getPostLength()}`);
