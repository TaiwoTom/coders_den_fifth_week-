//ExERCISE2
//question1: Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries, webTechs);

//question2: First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let regexSearch = /[.,]/g;
let result = text.replace(regex, ""); //remove punctuations from the string
console.log(result);
let arrray = result.split(" "); //string changed to array
console.log(arrray);
console.log(arrray.length); //the number of words in the array

//question3: In the following shopping cart add, remove, edit items -add 'Meat' in the beginning of your shopping cart if it has not been already added -add Sugar at the end of you shopping cart if it has not been already added -remove 'Honey' if you are allergic to honey -modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Honey"));
shoppingCart.splice(4, 1);
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Tea"));
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//question4: In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.indexOf("Ethiopia") !== -1
  ? console.log("ETHIOPIA")
  : countries.push("Ethiopia");

//question5: In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.indexOf("Sass") !== -1) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//question6: Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
