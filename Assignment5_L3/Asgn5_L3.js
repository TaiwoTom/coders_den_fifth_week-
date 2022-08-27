//EXERCISE3
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

//question1: The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//i) -Sort the array and find the min and max age
arrangAge = ages.sort();
console.log(arrangAge);
min = arrangAge[0];
max = arrangAge[0];

for (let i = 0; i < arrangAge.length; i++) {
  if (arrangAge[i] > max) {
    max = arrangAge[i];
  }
  if (arrangAge[i] < min) {
    min = arrangAge[i];
  }
}
console.log("Maximum Age in the Array is:" + max);
console.log("Minimum Age in the Array is:" + min);

// ii) -Find the median age(one middle item or two middle items divided by two)
arrangAge = ages.sort();
medianAge = Math.floor(arrangAge.length / 2);

if (arrangAge.length % 2 !== 0) {
  midAgesOdd = arrangAge[medianAge];
  console.log(`${midAgesOdd} is the median age`);
} else {
  midAgesEven = (arrangAge[medianAge] + arrangAge[medianAge - 1]) / 2;
  console.log(`${midAgesEven} is the median age`);
}

// iii) -Find the average age(all items divided by number of items)
sum = 0;
numAges = ages.length;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum);
average = sum / numAges;
console.log("The average is: " + average);

// iv) -Find the range of the ages(max minus min)
range = max - min;
console.log("The range is: " + range);

// v) Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
Math.abs(min - average) > Math.abs(max - average)
  ? console.log("Minimum value is greater than maximum value")
  : console.log("Minimum value is less than maximum value");

sliceArr = countries.slice(0, 10);
console.log(sliceArr);

// Question 2: Find the middle country(ies) in the countries array
mid = Math.floor(countries.length / 2);

if (countries.length % 2 !== 0) {
  midCountriesOdd = countries[mid];
  console.log(`${midCountriesOdd} is the middle country`);
} else {
  midCountriesEven = countries[mid - 1] + " " + "and " + countries[mid];
  console.log(`${midCountriesEven} are the middle countries`);
}

//Question 3: Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

midLength = Math.ceil(countries.length / 2);
if (countries.length % 2 == 0) {
  evenSliceIntoFirstHalf = countries.slice(0, midLength);
  evenSliceIntoSecondHalf = countries.slice(midLength);
  console.log(evenSliceIntoFirstHalf, evenSliceIntoSecondHalf);
} else {
  oddSliceIntoFirstHalf = countries.slice(0, midLength + 0);
  oddSliceIntoSecondHalf = countries.slice(midLength + 0);
  console.log(oddSliceIntoFirstHalf, oddSliceIntoSecondHalf);
}
