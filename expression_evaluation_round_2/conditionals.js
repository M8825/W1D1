let age = 30;

// >> younger than 30
if (age > 30){
  console.log('older than 30')
} else {
  console.log('younger than 30')
}


// 6
let str = 'pizza';

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string'); // >> short string
}

if (str[0] === 'p') {
  console.log('starts with p') // >> starts with p
}

// 7
let num = 15;
if (num % 3 === 0) {
  console.log('divisible by 3'); // >> divisible by 3
} else if (num % 5 === 0) {
  console.log('divisivle by 5');
}

// 8 
let num2 = 15;

if (num2 % 3 === 0) {
  console.log('divisible by 3'); 
}

if (num % 5 === 0) {
  console.log('divisible by 5')
}

// >> divisible by 3
// >> divisible by 5

// 9 
console.log('')
let str2 = 'App AcademY';
if (str2[0] === str2[0].toUpperCase()) {
  console.log('starts with a capital!');
}

if (str2[str2.length - 1] === str2[str2.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

// 10
console.log('')
let num_num = -44;

if (num_num > 0) {
  console.log('positive');
} else if (num_num < 0) {
  console.log('negative'); // >> negative
} else {
  console.log(0);
}

if (num % 2 === 0) {
  console.log('even'); // >> even
} else {
  console.log('odd');
}
