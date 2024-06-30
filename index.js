// Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array
// Using IIFE function
(function() {
    var arr=[1,2,3,4,5,6,7,8,9]
    let array=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
      array.push(arr[i])
      }
    }
      console.log(`${array}`)
    }
)();
// Using anonymous function
var arr=[1,2,3,4,5,6,7,8,9]
var oddnumbers=arr.filter(function(arr){
    return arr%2!==0  
});
console.log(`${oddnumbers}`);


//b.Convert all the strings to title caps in a string array
//Using anonymus function
var strings = ["hello", "world", "javascript","html","css"];
var upperStrings = strings.map(function(str) {
    return str.toUpperCase();
});
console.log(`${upperStrings}`); 
// Using IIFE Function
(function() {
    let string = ["hello", "world", "javascript","html","css"];
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[i].toUpperCase());
    }
    console.log(`${result}`);

})();


//C. Sum of all numbers in an array
//uSING anonymous function
var numbers = [1, 2, 3, 4, 5,6,7,8,9];
var sum = numbers.reduce(function(sum, number) {
    return sum + number;
},0);
console.log(sum); 
//uSING IIFE Function
(function(number){
    var number = [1, 2, 3, 4, 5,6,7,8,9];
    let sum1=0
    for(i=0;i<number.length;i++){
        sum1=sum1+number[i]
    }
    console.log(sum1)
})();

//D.Retrun all the prime in array
//uSING Anonomyus function
let numb = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let primeNumbers = numb.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <=Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(`${primeNumbers}`);                                                             
//uSING IIFE function
(function(arr1) {
    const isPrime = (num1) => {
        if (num1 <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num1); i++) {
            if (num1 % i === 0) return false;
        }
        return true;
    }
    let primeNumber = arr1.filter(isPrime);
    console.log(`${primeNumber}`); 
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

//E.Return all palindromes in a array
//using Anonomyus function
var numb2 = [121, 123, 202, 345, 454, 567, 676, 789, 898];

var palindromicNumbers = numb2.filter(function(num) {
    var str = num.toString();
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(`${palindromicNumbers}`); 
//uSING IIFE function
(function(arr) {
    let palindromicNumbers = arr.filter(function(num) {
        let str = num.toString();
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });

    console.log(`${palindromicNumbers}`); 
})([121, 123, 202, 345, 454, 567, 676, 789, 898]);

//F.Return median of two sorted arrays of the same size.
//uSING IIFE function
let median = (function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error();
    }
    let mergedArray = [];
    let i = 0, j = 0, k = 0;
    let n = arr1.length
    while (i < n && j < n) {
        if (arr1[i] < arr2[j]) {
            mergedArray[k++] = arr1[i++];
        } else {
            mergedArray[k++] = arr2[j++];
        }
    }
    while (i < n) {
        mergedArray[k++] = arr1[i++];
    }
    while (j < n) {
        mergedArray[k++] = arr2[j++];
    }
    let mid = mergedArray.length / 2;

    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);

console.log(median);
// USING Anonoymus function
const findMedian = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error();
    }

    let mergedArray = [];
    let i = 0, j = 0, k = 0;
    let n = arr1.length;
    while (i < n && j < n) {
        if (arr1[i] < arr2[j]) {
            mergedArray[k++] = arr1[i++];
        } else {
            mergedArray[k++] = arr2[j++];
        }
    }
    while (i < n) {
        mergedArray[k++] = arr1[i++];
    }
    while (j < n) {
        mergedArray[k++] = arr2[j++];
    }
    let mid = mergedArray.length / 2;
    return (mergedArray[Math.floor(mid) - 1] + mergedArray[Math.floor(mid)]) / 2;
};
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(findMedian(arr1, arr2));

//G.Remove duplicates from an array 
//uSING IIFE FUNCTION
let uniqueArray = (function(arr) {
    return Array.from(new Set(arr));
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray); 
//uSING Anonoymus function
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

let UniqueArray = arrayWithDuplicates.filter(function(item, index) {
    return arrayWithDuplicates.indexOf(item) === index;
});

console.log(UniqueArray); 

//H.Rotate an array by k times
//using anonoymus function
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let rotatedArray = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
})(array, k);

console.log(rotatedArray);
//uSING IIFE function
let RotatedArray = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
})([1, 2, 3, 4, 5, 6, 7], 3);

console.log(RotatedArray); 



//2.Do the below programs in arrow functions.
//a. Print odd numbers in an array
var arr=[1,2,3,4,5,6,7,8,9]
var oddnumbers=arr.filter((arr) =>{
    return arr%2!==0  
});
console.log(`${oddnumbers}`);

//b.Convert all the strings to title caps in a string array
var strings = ["hello", "world", "javascript","html","css"];
var upperStrings = strings.map((str)=> {
    return str.toUpperCase();
});
console.log(`${upperStrings}`); 

//c.Sum of all numbers in an array
var numbers = [1, 2, 3, 4, 5,6,7,8,9];
var sum = numbers.reduce((sum, number)=> {
    return sum + number;
},0);
console.log(sum); 

//d.Return all the prime numbers in an array
var numb2 = [121, 123, 202, 345, 454, 567, 676, 789, 898];

var palindromicNumbers = numb2.filter((num)=> {
    var str = num.toString();
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(`${palindromicNumbers}`); 

//e.Return all the palindromes in an array
var numb2 = [121, 123, 202, 345, 454, 567, 676, 789, 898];

var palindromicNumbers = numb2.filter((num)=> {
    var str = num.toString();
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(`${palindromicNumbers}`); 


























                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        





 






