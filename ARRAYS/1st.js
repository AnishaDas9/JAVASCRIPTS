// let marks = [85,83,89,87,81,82];
// console.log(marks);
// console.log(marks.length);


//LOOPING OVER AN ARRAY...............

// FOR LOOPS................


// let heros = ["ironman","thor","hulk","shaktiman","spiderman"];

// for(let idx = 0 ; idx< heros.length; idx++) {
//     console.log(heros[idx]);
// }

                    //OR


//  let heros = ["ironman","thor","hulk","shaktiman","spiderman"];

// for(let i = 0 ; i< heros.length; i++) {
//     console.log(heros[i]);
// }

//.................FOR OF LOOP.....................


// let cities = ["delhi","rajasthan","pune","mumbai"];

// for(let city of cities){
//     console.log(city);
// }

//...............PRACTICE QUESTION..........


// let marks = [85,97,44,76,60];

// let sum = 0;

// for(let val of marks){
//     sum += val
// }

// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


//............PRACTICE question...............

// let items =  [250,645,300,900,50];

// for(let i = 0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }

// console.log(items);


//...........ARRAY METHODS.............

//......PUSH METHOD............


// let foodItems = ["burger","potato","tmato","mango"];

// foodItems.push("chips","rools","chicken");

// console.log(foodItems);


//.............pop items................



// let foodItems = ["burger","potato","tmato","mango"];

// foodItems.pop("chips","rools","chicken");

// console.log(foodItems);

// let deletedItem = foodItems.pop();
// console.log("deleted",deletedItem);



//......to string..............


// let foodItems = ["burger","potato","tmato","mango"];

// console.log(foodItems.toString());



//...........concat()..............



// let marvelHeroes = ["thor","spiderman","ironman"];

// let dcHeroes = ["superman","batman"];

// let indianHeroes = ["shaktiman","krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);

// console.log(heroes);




//...............unshift................



// let marvelHeroes = ["thor","spiderman","ironman"];

// marvelHeroes.unshift("antman");

// console.log(marvelHeroes);



//...............shift............


// let marvelHeroes = ["thor","spiderman","ironman"];

// marvelHeroes.shift();

// console.log(marvelHeroes);



//...............slice...............



// let marvelHeroes = ["thor","spiderman","ironman"];


// console.log(marvelHeroes.slice(2));



//...............splice method................


// let arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);

// console.log(arr);


//add element............................


// let arr = [1,2,3,4,5,6,7];

// arr.splice(2,0,101);
// console.log(arr);



//................delete element...............


// let arr = [1,2,3,4,5,6,7];

// arr.splice(3,1);

// console.log(arr);


//..............replace element..........


// let arr = [1,2,3,4,5,6,7];

// arr.splice(3,1,101);

// console.log(arr);



//.............practice question..........


let companies = ["microsoft","bloomberg","uber","google","ibm"];
// companies.pop();
// console.log(companies);

// companies.splice(3,1,"ola");
// console.log(companies);

companies.push("amazon");
console.log(companies);































