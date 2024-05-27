 
 //..............LOOPS..............

 //............FOR LOOPS............

//  for (let count = 1;count <= 5; count++ ) {
//     console.log("apna college"); // 5 execute 
//  }

//  console.log("loop has ended"); 

// calculate sum of 1 to 5

// let sum = 0;
// for(let i = 1; i<=5; i++) {
//     sum = sum + i;
//     console.log("sum = ", sum);
// }

// for (let i = 1; i<=5; i++){
//     console.log("i = " , i);
// }

// console.log(i);

//...........WHILE LOOP.................

//  let i = 1;
//  while( i <=5) {
//     console.log("i = ",i);
//     i++;
//  }


//............do-while loop...........


// let i = 1;
// do{
//     console.log("i = ", i);
//     i++;
// } while(i<=5);

//..............for-of loop..........

//  let str = "javascript";
//  let size = 0;
//  for( let i of str) { // irator -> characters
//     console.log("i = ", i);
//     size++;
//  }

//  console.log("string size =",size)


//............for in loop................

// let student = {
//     name : "anisha das",
//     age : 20,
//     cgpa : 7.5,
//     ispass : true,
// };

// for(let key in student) {
//     console.log("key = ",key,"value =" , student[key]);
// }

//............PRACTICE QUESTION 1.............. 

// print even numbers from 0 to 100..........

// for( let num=0;num<=100; num++) {
//     if(num % 2 === 0){
//         console.log("num = ", num);
//     }
// }



//........PRACTICE QUESTION 2..............

let gameNum = 25;
let userNum = prompt ("Guess the game number :");

while(userNum != gameNum) {
    userNum = prompt ("you entered wrong number.Guess again :");
}

console.log("congratulations,you entered the right number");



