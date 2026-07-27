// Javascript arrays are one type of data structure where can store data in containers

/* 
suppose if you want store your friends name as per knowledge we have 
we can store data in to variables

like

const fri1 ="Sunny"
const fri2 ="Swathi"

like that it sounds not good like 
suppose if we want 10 names it becomes code will became heavy more lines not logic that why we use Arrays

Array is an container where we can store our data we can retrive back if we want after some time 
Array is one of the data structure where data is stored and getback some time later if we want

programming is all about data we need to store somewhere right if we want that stored data in sometime so we need to store 
thats why we ues arrays 

in javascript there are two data structures 1.Array
                                            2.Objects 
*/

// I take an example of friends I have 5 friends name instead of creating variable i nee store in an array with friends

// Creating an Array

const friends = ["Penchal Raju", "Deepika", "Chandana", "Vamsi", "Sunny"];

// to call this array just like that console.log(friends) where we call variables names

console.log(friends);

// Creating an Array By using constructor new Array

const year = new Array(1991, "Penchal", 12, true);
console.log(year);

// Every arrays in javascript starts with an indexing value from 0

// suppose if we want to call the first value suppose if have 5 values in an array those values are stored in like 0,1,2,3,4 if you want to access the first value like a[0] second value a[1]

// examples

console.log(friends[0]);
console.log(friends[1]);

// yow want know the length of an array just length reserved keyword a.length

console.log(friends.length);

// If you want to update an array index of 2

friends[2] = "SunnySwathi";

console.log(friends);

// remember const values never updated but in array im am updtating indexing values

/* riends = ["bob", "sam"];

console.log(friends); */ // const value never ever update and redeclared

// you want know the last values of an array a[a.length-1] when we are calling length method indexing will start with 1 in [5-1] =4 a[4] last element of a array [1,2,3,4,5] =a[a.length-1] =5

console.log(friends[friends.length - 1]);

// example

const CalAge = function (birthyear) {
  return 2037 - birthyear;
};

// I am creating an array

const years = [1991, 1996, 1995, 1997];

console.log(CalAge(years)); // NaN

// How we can Send these values by using indexing

const ages = CalAge(years[0], CalAge(years[1]));

const ages1 = CalAge(years[years.length - 1]);

console.log(ages, ages1);
