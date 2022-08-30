let str1 = 'market'
let num = 'whiteboard'.length - str1.length
console.log(num); // 4

let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // 'c'

let char = str2[num].toLowerCase();
console.log(char + '!'); // 'c!'


let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // the last element