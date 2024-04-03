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


// function generalDifference (params) {
//     let NumberObj1 = {a : 2, b: 3}
//     let NumberObj2 = {c : 4, d: 5} 
//     let addObj = Object.assign(NumberObj1, NumberObj2)
//     let changeObjToArray = Object.values(addObj) 
//     let max = Math.max(...changeObjToArray)
//     let min = Math.min(...changeObjToArray)

//     console.log(`array ichidagi max numberdan ${max - params} ga kichik`);
//     console.log(`array ichidagi min numberdan ${params - min} ga katta`);

// }
// generalDifference (3) 


// 4 task finished 


// 5 task starts 



// let Obj = {name: "Azamat", age: 22, hobby : "learning programming "} 

// function TakeObjToArray (Obj) {
//     let value = Object.values(Obj) 
//     let keys = Object.keys(Obj)

//     return `Values:${value}  \n keys :  ${keys}`


// }

// console.log(TakeObjToArray(Obj));


//  5 task finished  


//  6 task starts  


//   let arr1 = [1,2,3,4,5,6,7,12,15,13] 
//   let max = Math.max(...arr1)
//   let min = Math.min(...arr1)

// const maxIndex = arr1.indexOf(max) 
// const minIndex = arr1.indexOf(min)  



// arr1[maxIndex] = min 
// arr1[minIndex] = max


// console.log(`Array ichidagi eng katta son bn eng kichik son indexi o'zgaradi ${arr1}`);

// 6 task finished  


// 7 task starts  


// let naturalNumber = +prompt("Enter your notural number ...")

// function getInitialOdds (number) {

//     let oddNumber = [];

//     let num = 0;
//     let n = 0;
//     while(num < number){
//         while(true){
//             if(n % 2 != 0){
//                 oddNumber.push(n);
//                 n++;
//                 break;
//             }
//             n++;
//         }
//         num++;
//     }
//     return oddNumber


// }

// console.log(getInitialOdds(naturalNumber));


//  7 task finished 


// 8 task starts 



// let numbers = [2,7,11,15] 
// let target = 9


// function getIndex  (numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//        for (let g = i + 1; g < numbers.length; g++) {

//         if (numbers [i] + numbers[g] == target) {
//             return [i , g] 
//         }
//        }
//     }
// }

// console.log(getIndex(numbers, target));

// 8 task finished 

// 9 task 

// let arr = [1,3,2,2,3] ;
// arr.sort((a,b) => a -b)

// const dublicateArray = new Set(arr) ; 

// console.log(dublicateArray); 

// 9 task finished 


// 10 task starts  


