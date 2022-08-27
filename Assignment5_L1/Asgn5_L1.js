const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//question1: Declare an empty array;

ar = [];
//or ar = Array();

//question2: Declare an array with more than 5 number of elements

arr1 = [1, "two", 3, "four", 5, "six", 7];

//question3: Find the length of your array;
console.log("length of my array is: " + arr1.length);

//question4: Get the first item, the middle item and the last item of the array
console.log(
  "first item is: " +
    arr1[0] +
    " , middle item is: " +
    arr1[Math.floor(arr1.length / 2)] +
    "  , last item is: " +
    arr1[arr1.length - 1]
);

//question5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = ["Joy", false, 9.5, true, ("a", "b"), 4];
console.log("length of the array is:   " + mixedDataTypes.length);

//question6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//question7:Print the array using console.log()
console.log(itCompanies);

//question8: Print the number of companies in the array
console.log("number of companies in the array:   " + itCompanies.length);

//question9: Print the first company, midd company and last company
console.log(
  "first company is: " +
    itCompanies[0] +
    " , middle company is: " +
    itCompanies[Math.floor(itCompanies.length / 2)] +
    "  , last company is: " +
    itCompanies[itCompanies.length - 1]
);

//question10: Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//question11: Change each company name to uppercase one by one and print them out
for (let i of itCompanies) {
  console.log(i.toUpperCase());
}

//question12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies.splice(0, itCompanies.length - 1) +
    "  and  " +
    itCompanies[itCompanies.length - 1] +
    "  are big IT companies."
);

//question13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

itCompanies.includes("Amazon") == true
  ? console.log("Amazon")
  : console.log("a company is not found");

//question14: Filter out companies which have more than one 'o' without the filter method
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
newArr = [];
for (let i of itCompanies) {
  let pattern = /[a-zA-Z]*o[a-zA-Z]*o[a-zA-Z]*/gi;
  let searchy = i.match(pattern);
  console.log(searchy);
  if (searchy[i] !== "null") {
    console.log(searchy.toString());
  }
}

//question15: Sort the array using sort() method

itCompanies.sort();
console.log(itCompanies);

//question16: Reverse the array using reverse() method

itCompanies.reverse();
console.log(itCompanies);

//question17: Slice out the first 3 companies from the array

console.log(itCompanies.splice(0, 3));

//question18: Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

//question19: Slice out the middle IT company or companies from the array
console.log(itCompanies);
let mid = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 !== 0) {
  miditCompaniesOdd = itCompanies[mid];
  console.log(`${miditCompaniesOdd} is the middle country`);
} else {
  miditCompaniesEven = itCompanies[mid - 1] + " " + "and " + itCompanies[mid];
  console.log(`${miditCompaniesEven} are the middle countries`);
}

//question20: Remove the first IT company from the array
console.log(itCompanies.shift());

//question21:Remove the middle IT company or companies from the array
console.log(itCompanies);
mid2 = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 !== 0) {
  itCompanies.splice(mid2, 1); //remove middle companies if lenght of array is an odd number
  console.log(itCompanies);
} else {
  itCompanies.splice(mid2 - 1, 2); //remove middle companies if lenght of array is an even number
  console.log(itCompanies);
}

//question22: Remove the last IT company from the array
console.log(itCompanies.pop());

//question23: Remove all IT companies
console.log(itCompanies.splice());
