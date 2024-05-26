// function myFunction() {
//     console.log("welcome to apna college!");
//     console.log("we are learning js ");
//     console.log("welcome to apna college!");
//     console.log("we are learning js :)");
// }

// myFunction();


//.........FUNCTION -> 2 NUMBERS,SUM..............


// function sum (x,y) {
//     console.log(x+y);
// }

// sum (1,2);



//...........arrow function..........



// const arrowsum = (a,b) => {
//     console.log(a+b);
// //     return a+b;
// }
// arrowsum(1,2);


//..........practice question...............


// function countVowels(str) {

//     let count = 0;
//     for (const  char of str) {
//         if(char==="a" || char==="e" || char==="i"|| char==="o"|| char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("apnacollege");



//..............practice question 2.........


// const countVowels = (str) => {
//     function countVowels(str) {

//         let count = 0;
//         for (const  char of str) {
//             if(char==="a" || char==="e" || char==="i"|| char==="o"|| char==="u"){
//                 count++;
//             }
//         }
//         console.log(count);
//     }
//     countVowels("apnacollege");
    
// }
// countVowels("abcdef");




//...............for Each loop....................



// let arr = [1,2,3,4,5];

// arr.forEach(function printVal (val) {

//     console.log(val);

// }) 


//...............OR........................



// let arr = ["delhi","pune","bombay"];

// arr.forEach((val,idx,arr) => {
//     console.log(val,idx,arr);
// });
// we can use this 3 parameters in foreach loop that is VAL, IDX, ARR.
    



//................practice question.............



// let arr = [1,2,3,4,];

// arr.forEach(function print (arr) {
//     console.log(arr*arr);
// })


//........OR......................


// let nums = [2,3,4,5,6];

// nums.forEach((num) => {
//     console.log(num*num); // num**2
// })


//...............OR...................

// let nums = [67,52,39];

// let calcSquare = (num) => {
//     console.log(num*num);
// };
// nums.forEach(calcSquare);

 


//*********************** MAP**********************



// let nums = [67,52,39];

// nums.map((val) => {
//     console.log(val);
// });


// let nums = [67,52,39];

// let newArr = nums.map((val) => {
//     return val*val;
// })

// console.log(newArr);

//............OR.............

// let num = [67,52,39];

// let newArr = (num) => {
//     console.log(num*num);
// }

// num.map(newArr);



//****************** FILTER METHOD *******************


//  let arr = [1,2,3,4,5,6];

//  let evenArr = arr.filter((val) => {
//     return val % 2 ===0 ;
//  })
//  console.log(evenArr);


// let arr = [1,2,3,4,5,6];

// arr.filter(function print (arr) {
//     console.log( arr % 2 ===0);
// })

// let arr = [1,2,3,4,5,6];
// let evenArr =(arr) => {
//     console.log( arr % 2 === 0);
// }
// arr.filter(evenArr);


// let arr = [1,2,3,4,5,6];

// arr.map ((val) => {
//     console.log(val%2===0);
// });

// let arr = [1,2,3,4,5,6];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0 ;
// })
// console.log(evenArr);



//*******************REDUCE METHOD************


// let arr = [1,2,3,4];

// let output = arr.reduce((prev,curr) => {
//     return prev + curr;
// })
// console.log(output); // 10


// let arr = [1,2,3,4,5,6];

// let output = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output);


//********************PRACTICE QUESTION 1*************


// let marks= [97,64,32,49,99,86];

// let toppers = marks.filter((val) => {
//     return val > 90 ;
// });
// console.log(toppers);



//***********************PRACTICE QUESTION 2********************



let n = prompt ("enter a number :");
let arr = [];

for (let i = 1; i<= n ; i++) {
    arr[i-1] = i ;
}

console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res + curr;
})
console.log("sum =", sum);

let factorial = arr.reduce((res,curr) =>{
    return res * curr;
})

console.log("factorial = " , factorial);


