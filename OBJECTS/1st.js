// const student = {
//     fullName: "anisha das",
//     marks: 94.4,
//     printMarks : function() { // printMarks is a method
//         console.log("marks = " , this.marks) // student.marks
//     }
// }


// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%");
//     }
// };
                   //or

// const employee = {
//     calcTax: function() {
//         console.log("tax rate is 10%");
//     }
// }





const employee = {
        calcTax () {
            console.log("tax rate is 10%");
        }
    };


    const diptanu = {
        salary: 5000
    };

    diptanu.__proto__ = employee;