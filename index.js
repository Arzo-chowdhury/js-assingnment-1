//write a function named calculateSum that takes two arguments and returns the sum of the two arguments.

function calculateSum(a , b){
    return a + b ;
}

let result = calculateSum(15, 10);
console.log(result);

//write a function named isEven that takes one argument and returns true if the number is even , and false if it is not.

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(9));

//write a function named findMax that takes an array of numbers and returns the largest number of the array.

function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([23,22,25,27,28.50,200,150]));

//write a function named filterOddNumbers that takes an array of numbers and a new array containing only the odd numbers .

function filterOddNumbers(numbers){
    return numbers.filter(num => num % 2 !== 0);
}

console.log(filterOddNumbers([1,2,3,4,5,6,7,8,9]))

//write a function named countWords that takes a string and returns the number of words in the string.

function countWords(str){
    if(!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
}

console.log(countWords("Hey js"));
console.log(countWords("This is function count words"));
console.log(countWords(""));

//write a function named removeDuplicates that takes an array and returns a new array with duplicates elements removed.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,3,4,4,5,6,7,8,9]));