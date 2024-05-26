// let btn1 = document.querySelector("btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// };


// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
// }

// event listener....................


// btn1.addEventListener = ("click", () => {
//     console.log("button1 was clicked")
// })



let modeBtn = document.querySelector("#mode");
 let currMode = "Light";

 modeBtn.addEventListener("click", () => {
    if(currMode === "Light"){
        currMode ="dark";
        document.querySelector("body").style.backgroundColor = "black";

    } else {
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
 });