console.log("welcome to anisha's world");
console.log("i want a chocolate right now");

//VARIABLES

fullName = "Anisha Das"
console.log(fullName);

// if we use inverted comma inside the bracket of console.log then it prints as it is but if we don't use inverted comma then it prints only value of the variable.

// age = 24
// console.log(age);

// NULL and UNDEFINED

// x = null;
// console.log(x);

// y = undefined;
// console.log(y);

//BOOLEAN DATATYPES

// isFollow = false
// console.log(isFollow);

// isFollow = true
// console.log(isFollow);
// this "=" equal to operator is called assignment operator. and in boolean datatype there are two types of vales that is called true and false.

//VAR,LET,CONST

//1. VAR

// var age = 24
// var age= 56
// var age = 89 
// var age = 47
// console.log(age);

//2.LET 

// let age = 54;
//  age = 47 ;
//  age = 54;
//  age = 85;
//  console.log(age);

 //3.CONST 

//  const pi = 41
//  console.log(pi);


// let a;
// console.log(a); // the output will be undefined by default bcz there is no value in a.

//BLOCK

// {
//     let a = 5;
//     console.log(a);

// }

// {
//     let a = 10;
//     console.log(a);

// }

// when new curly braces ("{}") starts from that point new blocks starts.


// OBJECTS

// {
//     age = 5;
//     name =  "anisha das";
// }
//  console.log(typeof age); // inside the curly braces is called objects.



 //  A SPECIAL CASE OF STRING DATATYPE

// const product = {
//     x : "1234"
// }
// console.log(["1234"] + 23); // to use this special case must blocks that means curly braces. inside the curly braces are called objects.

// const someone = {
//     x : "1234"
// }
// console.log(["1234"] + abcde);

// FIND TYPE OF 

// const student = {
//     name : "Anisha Das",
//     age : 21,
//     isFollow : false ,
//     marks : 699,

// };
// console.log(student);

// console.log(typeof student); // output is object. remember onething there should be space in between typeof and the next word, for example typeof student,there is space between typeof and student.

// console.log(student.name); // this is the way to find the value of particular keyword inside the object.

                                              // OR 

// console.log(student["age"]);  // this is the way to find the value of particular keyword inside the object.


// console.log(typeof student["marks"]); // this is the way to find the typeof of particular keyword inside the object.

//  student ["age"] = student ["age"] + 1;
// console.log(student ["age"]);

// student ["name"] = "Anisha Saha"
// console.log( student ["name"]);

// student ["marks"] = student ["marks"] + 202;
// console.log(student["marks"]);

// student ["marks"] = "899" ;
// console.log(student["marks"]);

// student ["isFollow"] = "true";
// console.log(student["isFollow"]);



//PRACTICE QUESTION number 1


const product = {
    name : "ball pen",
    price : 270,
    offer : 5,
};

console.log(product);

console.log(typeof product);

console.log(typeof product["price"]);

console.log(product.price);

//         OR

console.log(product["price"])

// if we want to change than

product ["name"] = "gel pen";
console.log(product["name"]);

product ["price"] = product ["price"] + 80;
console.log(product ["price"]);



// PRACTICE QUESTION NUMBER 2


const profile = {
    userName : "____anishadas____ ", 
    isFollow : false,
    followers : 123,
    following : 123,
};

console.log(profile);

console.log(typeof profile["isFollow"]);