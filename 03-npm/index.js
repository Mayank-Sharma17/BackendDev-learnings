// var generateName = require('sillyname'); // created a variable which requires the sillyname node module

// import generateName from "sillyname";

// var sillyName = generateName(); // method comes from module 
// console.log(`My name is ${sillyName}.`);

import superheroName from "superheroes"; // superheroName object from superheroes package

const name = superheroName.random()
console.log(`I am a ${name}!`);