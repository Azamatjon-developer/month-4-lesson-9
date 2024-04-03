// task 1 starts  

// let arr = [1,3,5,6,7] 
// let evenNumber = 0
// let oddNumber = 0


// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         evenNumber ++
//     }else{
//         oddNumber++
//     }
// }
// console.log(`juft sonlar yigindisi ${evenNumber} ga teng`);
// console.log(`toq sonlar yigindisi ${oddNumber} ga teng`);

//  1 task finished 


//  2 task starts 

// let arr = [1,2,3,4,5,6,7,8,9] 


// let evenNumber = 0 
// let oddNumber = 0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         evenNumber ++
//     }else{
//         oddNumber++
//     }
// }
// // console.log(`juft sonlar yigindisi ${evenNumber} ga teng`);
// // console.log(`toq sonlar yigindisi ${oddNumber} ga teng`); 



// let addNewNumber = +prompt('Enter your favorite number ...') 

// let differenceEven = addNewNumber - evenNumber 
// let differenceOdd = addNewNumber - oddNumber 


// console.log(`siz kiritgan son va juft sonlar farqi ${differenceEven}`);
// console.log(`siz kiritgan son va toq sonlar farqi ${differenceOdd}`);

//  2 task finished  


//  3 task starts  


// let addNumber1 = +prompt("Enter your first number ...")
// let addNumber2 = +prompt("Enter your second number ...") 

// if (addNumber1 < addNumber2) {
//     let maxNumber = Math.max(addNumber1, addNumber2)
//     let minNumber = Math.min(addNumber1, addNumber2)
//     let result = 0

//     for (let i = minNumber; i <= maxNumber; i++) {
//         if (i % 2 == 0) {
//             result += i
            

//         }
//     }
//     console.log(`Ikki son orasidagi juft sonlar yigindisi ${result} ga teng`);

// }else{
//     console.log(` Please write the first number a small number  `);
// }

// 3 task finished  

// 4 task starts  


function generalDifference () {
    let NumberObj1 = {a : 2, b: 3}
    let NumberObj2 = {c : 4, d: 5} 
    let addObj = Object.assign(NumberObj1, NumberObj2)

    console.log(addObj);




}
generalDifference ()