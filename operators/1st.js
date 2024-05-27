// ARITHMETIC OPERATORS
// let a = 5;
// let b = 6;

// console.log("a+b =", a+b);
// console.log("a-b =", a-b);
// console.log("a/b =", a/b);
// console.log("a*b =", a*b);
// console.log("a%b =", a%b);
// console.log("a**b =", a**b); // this ** is called Exponentiation

// UNARY OPERATOR

//Increment operator

// let a = 5;
// let b = 6;
//  a++;
//  console.log(a); // 6

// b++;
// console.log(b); //7 

//Decrement operator

// let a = 5;
// let b = 6;

// b--;
// console.log(b);

// a--;
// console.log(a);


// ASSIGNMENT OPERATOR

// let a = 5;
// let b = 6;

// a += b;
// console.log(a);

// a += 4;
// console.log("a =",a);
//  a -= 4;
//  console.log("a =",a);

//  a /= 4;
// console.log("a =",a);

//COPARISON OPERATOR

// let a = 5;
// let b = 6;

// console.log("5==6" , a==b); // false    

// console.log("5!=2",5!=2);
// console.log("5!=6", a!=b);

// console.log("a===b", a===b);


// LOGICAL OPERATOR (TRUE AND FALSE)

// let a = 5;
// let b = 6;

// let cond1 = a<b;
// let cond2 = a !=b;

// console.log("cond1 && cond2 =" , cond1 && cond2);

//  let cond1 = a<b;
//  let cond2 = a !=b ;
//  console.log("cond1 || cond2 =" , cond1 || cond2);


//  -----------------//CONDITIONAL STATEMENTS---------------

 // IF STATEMENTS

//  let age = 25;

//  if ( age>= 18) {
//     console.log("you can vote");
//  }

//  if (age<18) {
//     console.log("you CANNOT vote");
//  }


  //............IF STATEMENT.................

// let mood = "light";
// let color;
// if (mood === "dark") {
//     color = "black"
// } else {
//     color = "white"
// }

// console.log(color);

// let age = 16;
// if (age>=18) {
//     console.log("you can vote");
// }else{
//     console.log("not vote");
// };
 

// let num = 10;
// if(num % 2 === 0) {
//     console.log("num is even");
// } else {
//     console.log("num is even")
// }

// let num = 7;
// if(num % 2 === 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd") 

// }

//.................ELSE-IF STATEMENT...............

// let mood = "dark";
// let color;
// if (mood === "dark") {
//     color = "black";
// } else if (mood === "blue") {
//     color = "blue";
// } else if (mood ==="pink") {
//     color = "pink";
// } else{
//     color = "white";
// }

// console.log(color);

// if (mood==="dark") {
//     console.log(color = "black");
// }

//..................TERNARY OPERATOR................

// let age = 25;

// let result = age>= 18 ? "adult":"not adult"; //simpler,compact if-else
// console.log(result);

 //............ PRACTICE QUESTION 1................

//  let num = prompt ("enter a number");
//  if(num % 5 === 0) {
//     console.log(num,"is a multiple of 5");
//  } else {
//     console.log(num,"is NOT a multiple of 5");
//  }
 

//..............PRACTICE QUESTION 2............


 let score = 75;
 let grade;
 if(score >= 90 && score<=100) {
    grade = "A";
 } else if(score >=70 && score <= 89) {
    grade = "B";
 } else if(score >= 60 && score <= 69){
    grade = "C";
 } else if (score >= 50 && score <= 59){
    grade = "D";
 } else if (score >= 0 && score <= 49) {
    grade = "F"
 }
 console.log("according to your scores, your grade was:" , grade);






 




 



