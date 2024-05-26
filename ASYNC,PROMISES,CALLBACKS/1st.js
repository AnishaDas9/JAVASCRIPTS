// synchronous programming


// console.log("one");
// console.log("two");
// console.log("three");



//settimeout...............


// function hello () {
//     console.log("hello");
// }
// setTimeout(hello,6000) //timeout; 2s = 2000ms


//Getdata....................


// function getData (dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000)
// }
// getData(456);

// function getData (dataId) {
//     setTimeout(() =>{
//         console.log("data " , dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     },2000);  
// }

// getData (1, () => {
//     getData(2);
// });





//PROMISES........................................






let promise = new promise ((resolve,reject) => {
    console.log("i am a promise");
    resolve("success");
});

