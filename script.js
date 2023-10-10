// function main(){
//     arr=[2,6,7,8,9,0,9,4]
//     for(let i=0;i<=(arr.length)-1;i++){
//         console.log(arr[i])

//     }
// }

// ARROW FUNCTION


// main()
// let main = ()=>{
//     arr=[2,6,7,8,9,0,9,4]
//     for(let i=0;i<=(arr.length)-1;i++){
//         console.log(arr[i]);

//     }
// }
// main()


//x of loop(name) // 

// let main = ()=>{
//     arr=["Orange","Gova","Pinapple","tomatto","grapes","apple",9,4]
//     for(x of arr){    //---------------------------------> we can simply use "x of array name" can print the entire array one by one
//         console.log(x);

//     }
// }
// main()


// let print = ()=>{
//     const object={name:"ford",model:"Endevar",make:2008,cc:"4000cc",horsepower:"20hp"}
//     for(let x in object)
//     console.log(object[x]);
// }

// print()


// While loop

// array1=["Orange","Gova","Pinapple","tomatto","grapes","apple",9,4]

// let i=0;
// // do{
// //     console.log(array1[i]);
// //     i++;
// // }
// while(i<array1.length){
//     console.log(array1[i]);
//     i++;
// }



// while(i<array1.length){

//     console.log(array1[i])

// }


//PROMISES-FETCH-CATHCH

// fetch('https://api.example.com/users')
//     .then(response => response.json()) // Parse the response as JSON
//     .then(data => {
//         // Process the data returned by the API
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//     });


//PRINTING EVEN NUMBERS

// const even= () => {

// }

// let number = [1,2,3,4,5,6,7,8,9,10]

// for(i=0;i<=number.length;i++){

//     if (number[i]%2==0){
//         console.log(number[i]);
//     }



// }

// for (i=1;i<11;i++){
//     console.log(i*(i+1)/2);
// }

// for(i=1;i<11;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// PRINTING TAMBLES 0F 2

// for(i=1;i<=10;i++){
//     // console.log(i,"x",2,"=",i*2);
//     console.log(`${i} x 2 = ${2*i}`);

// }

//UNIT CONVERTING-METERS TO KILOMETER

// const convert = (meter)=>{
//     let km = meter/1000
//     console.log(`The converted kilometer unit is ${km} km.`);

// }
// convert(100)

//SUM OF NUMBERS IN ARRAY

// numbers1 = [2,3,5]
// let sum = 0 ; //----------------------------->Always declare variables in global scope.because block scope variables can access global scope
// numbers1.forEach((e) => {

//     sum = sum+e;


// });
// console.log(sum)


// let a = 20;
// a=30;
// console.log(a)

//REVERSING THE ARRAY

// array1 = [3,2,4,5,6,"Anbu",89,33]
// console.log(array1.reverse())

// array1 = [3,2,4,5,6,89,33]
// let newVal = [];
// for(i=0;i<array1.length;i++){
//    newVal.unshift(array1[i]);
// }
// console.log(newVal);


// CREATING OWN ARRAY METHOD //it is an map method code behind

// const ownMethod = function () {
//     let newVal = [];
//     for (i = 0; i < array1.length; i++) {
//         newVal.unshift(array1[i]);
//     }
//     console.log(newVal);

// }

// Array.prototype.magic = ownMethod

// array1 = [5,3,89,2,4,6,33]
// array1.magic();


// console.log(typeof "array1");

//SORTING OF ARRAYS
// array1 = [5,3,89,2,4,6,33]
// let newArray = []
// let number1 = 0;

// for(i=0;i<array1.length;i++){
//     if(array1[i]>number1){
//         newArray.push(array1[i]);
//     }
//     else{
//         newArray.unshift(array1[i]);
//     }
//     number1 = array1[i];
// }
//  console.log(newArray);


// SORTINF OF ARRAYS

// let arrayString = ["Orange","Bannana","Pinappe","Mango"] 
// console.log(arrayString.sort());

// let array1 = [9,44,6,2,6,1,0,33]
// console.log(array1.sort());

//BASIC OF SWAPPING

// let a = 22
// let b = 33

// let temp = a;
// a=b
// b=temp

// [a, b]=[b, a]
// console.log(`a=${a}`);
// console.log(`b=${b}`);


//HIGHER ORDER FUNCTIONS

//FOR EACH METHOD

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// let addition = 1

// // array1.forEach((value)=>{
    
// //     addition = addition+value
// // })
// // console.log(addition);

// for(i=0;i<array1.length;i++){
//     addition = addition * array1[i]
// }

// console.log(addition);

//MAP METHOD

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// let map = array1.map((value)=>{

//     return value/2
// })

// console.log(map);


//FILTER METHOD

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// let filter = array1.filter((value)=>{

//     return value >=5

// })

// console.log(filter);


//FIND METHOD

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// let find = array1.find((value)=>{

//     return value == 77

// })

// console.log(find);

// REDUCE METHOD 

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// let reduce = array1.reduce((accumulator,currentValue)=>{
//     console.log(accumulator);
//    return accumulator+currentValue

// },99999)
// console.log(reduce);


// ARRAY METHODS
// let array1 = [20,2,4,5,77,1,2,5,7,8]

//PUSH --->used to add elements in the last


// array1.push("Mr.Anbu")
// console.log(array1);



//POP------------------------------------->Pop ,method is used for removing last value from the array
// let array1 = [20,2,4,5,77,1,2,5,7,8]

// array1.pop()
// console.log(array1);


//UNSHIFT---------------------------------->used to add value in the first position

// let array1 = [20,2,4,5,77,1,2,5,7,8]

// array1.unshift("anbu")
// console.log(array1)


//SHIFT----------------------------------->used to remove first value of the position

// let array1 = ["kannan","anbu",20,2,4,5,77,1,2,5,7,8]
// array1.shift()
// console.log(array1)

//JOIN----------------------------------->convert array into string ----join method only return the value not reintialize the value

// let array1 = [20,2,4,5,77,1,2,5,7,8]
// array1.join()
// console.log(array1.join(" "))



//CONCST--------------------------------->concadinating multiple arrays----also able to add values to thearray usind concat method

// let array1 = [20,2,4,5,77,1,2,5,7,8]
// let array2 = ["Anbu",20,2,4,5,77,1,2,5,7,8]
// let array3 = ["Developer",20,2,4,5,77,1,2,5,7,8]
// let array4 = [33,"New",20,2,4,5,77,1,2,5,7,8]

// let finalArray = array1.concat(array2,array3,array4)
// let newArray = array1.concat("Anbu Dev","Engineer")
// console.log(newArray);

//SLICE-------------------------------->this method is used to delete ,add,replace the values --(first parameter=starting position,second parameter till countt,third elaments to be addedt )
// let array1 = [20,2,4,5,77,1,2,5,7,8]
// console.log(array1.splice(1,3));



//SPLICE
//splice remove the element 
// let array1 = [20,2,4,5,77,1,2,5,7,8]
// console.log(array1.splice(1,3));


//DELETE------------------------------------------->used for delete individal value in the array

// let array1 = [20,2,4,5,77,1,2,5,7,8]
// // array1.delete("77")
// delete array1[4]
// console.log(array1);



//ARRAY LENGTH --------------------------------------->used to calculate the length of array

// let array1 = [20,2,4,5,77,1,2,5,7,8]
// console.log("Length of an array is",array1.length);


//TO STRING ------------------------------------------>return the string value of array ---->returns value only with commo based

// let array1 = [20,2,4,5,77,1,2,5,7,8]
// array1.toString()
// console.log(array1)
// console.log(array1.toString());


//FLAT

// let array1 = [20,2,[4,5,77],1,[2,5],7,8]
// console.log(array1.flat());


//SPLIT METHOD
// let array1 = [20,2,4,5,77,1,2,5,7,8]
// console.log(array1.split());

//SPREAD OPERATOR

// let nums = [0,1,0,3,12]
// var moveZeroes = function(nums) {
//     let output = []
//     for(i=0;i<nums.length;i++){
//         if(nums[i]==0){
//             output.push(nums[i])
//         }else{
//             output.splice(i+1,0,nums[i])
//             console.log("Checking");
//         }
//     }
//     return output
    
// };
// console.log(moveZeroes(nums))

// let nums = [0,1,0,3,12]

// let output = nums.map((e,i)=>{
//     if(e==0){
//        return 
//     }
//     else{
//        return e
//     }
// })

// console.log(output);


//Every METHOD---------------------------->It will check wheather the condition is satidfies the all values of array

// array1 = [2,6,8,4,2,7,22]

// let newArray = array1.every((e)=>{
//    return e>10
// })

// console.log(newArray);

// let newArray1 = function(array1){
//    array1
//    if(array1>10){
//       console.log("10");
//       return 10
//    } 
// }
// newArray1()


