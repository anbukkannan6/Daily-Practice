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

// let array10 = [20,2,4,5,77,1,2,5,7,8]
// let newArray = []
//  array10.forEach((val)=>{ 
//     newArray.push(val)

// })
// console.log(newArray);

// let addition = 1

// // array1.forEach((value)=>{

// //     addition = addition+value
// // })
// // console.log(addition);

// for(i=0;i<array1.length;i++){
//     addition = addition * array1[i]
// }

// console.log(addition);

// MAP METHOD

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

// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

// let exist = (board,word)=>{
//     let newArray = board.flat()

// console.log(newArray.indexOf("Z"));
// let finedWord =""

// for(i=0;i<=word.length;i++){

//     let index = newArray.indexOf(word[i])
//     // console.log(index);
//     if(index >=0){
//         finedWord = finedWord+word[i]

//     }

// let checked = newArray.find(word[i])
//     }
//     console.log(finedWord)
//     if(finedWord == word){
//         return true
//     }else{
//         return false
//     }
// }
// let result = exist(board,"ABC")

// console.log(result);

// let string = "ANBU"

// console.log(string[0])


// let array1 = [{name:"orange",name1:"Apple",name2:"Pinapple",name3:"grapes",name4:"Olive"}]
// // let array2 = array1.toLowercase()
// // console.log(array2);

// console.log(array2.sort());

// let array100 = ["a","1"]

// let a = "1AnbuKannan"

// console.log(a.charCodeAt(3)); 
// console.log(a.charCodeAt(5)); 
// console.log(a.charCodeAt(0)); 
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// ARRAY MANUPULATION

// let array10 = ["Anbu",20,"Kannan",1000]

// let index = array10[0]

// let newArray=[]

// for(i=0;i<index.length;i++){
//     // console.log(array10[i]);
//     newArray.push(index[i])
// }

// console.log(newArray.toString());

//STRING METHOD----->TRIM(),SPLIT()

// a=" anbu kannan "
// let c = a.trim()
// console.log(c);
// let b = c.split(" ")
// console.log(b);

// let s = "Hello World"

// var lengthOfLastWord = function(s) {
//     let removedSpace =  s.trim()
//     console.log(removedSpace);
//     let split = removedSpace.split(" ")
//     console.log(split);
//     let lastWord = split[split.length-1]
//     console.log(lastWord);
//     return lastWord.length

//  };
// console.log(lengthOfLastWord(s));


// CONST Key Word in variables

// var array = [1,2,3,4,5,6]


// console.log(array.push(100));
// console.log(array.push(100));
// console.log(array);

// const obj = {
//     name : "Anbu",
//     place : "pudukkottai"
// }

// console.log(obj);
// obj.name = "Kannan"
// console.log(obj);

// console.log(x);

// let x = 10


//NAMASTHE JAVASCRIPT --Experimentation

// var x = 7;

// function getName(){
//     console.log("Anbukkannan");
// }

// console.log(x);


// let a=121
// console.log();
// let b = a.toString()
// console.log(a.array());


//ARRAY OF OBJECT
// JS DSA 
// ROADSIDE CODDER
// console.log(0.2 + 0.1 === 0.3);
// console.log(0.5 + 0.1 === 0.6);


// let a = 22;
// let b=a;
// b=10
// console.log(a);
//TASK OF THE DAY---->DEEP COPY AND SHALLOW COPY
// nnn
// let a ={abc:34}
// let b = a
// b.abc=244
// console.log(b);
// console.log(a);


//SPREAD OPERATOR---->Used for spread the array ok object as itratable

// let newArr0 = [...arr0].push(10)
// let newArr1 = arr0.push(10)
// console.log(newArr0);
// console.log(newArr0);
// console.log(newArr1);
// console.log(arr0);

// ------------------------->'\mering the two arrays using spread oparator
// let arr0 = [1, 2, 3, 4, 5]
// let arr1 = ["anbu", "arun", "senthil", "vel"]

// let newArr0 = [...arr0, ...arr1]
// console.log(newArr0);

//------------------------->Combining objects using spread oparator

// const obj0 = { index: "NIFTY50", spot: 19700 }; //---->Every object has unique key 
// const obj1 = { index: "BANKNIFTY", spot: 44665 };//--->If we combine the both object with same propertyName then it will overwrite the exixting key value pair

// const newObj0 = { ...obj0, ...obj1 }
// console.log(newObj0); //------>why shoud it not print combined value

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObj = { ...obj1, ...obj2 }; // Combines both objects
// console.log(combinedObj);

// ------------------------->FUNCTION Argument spreading
// let arr = [1,2,3,4,5,6]
// function status1(...arr){

//     console.log(...arr);


// }status1(arr)

// const maxNum = Math.max(...arr); // Passes each element of the array as arguments
// console.log(maxNum);

// ------------------------->Creating shallow copy

//Shallow copy only affected when the nested array 

// let arr = ["NIFTY",["Tata","Reliance"],"SENSEX","BANKNIFTY","FINNIFTY"]
// let newArr = [...arr];

// arr[1][0]="HDFC"
// console.log(newArr);
// console.log(arr);


//SHALLOW COPY IN OBJECTS

// const obj0 = { index0: "NIFTY50", spot0: 19700 , stocks:{reliance:3400,tata:230}}; //---->Every object has unique key 
// const obj1 = { index1: "BANKNIFTY", spot1: 44665 }

// const newObj0 = {...obj0}

// console.log(newObj0);

// newObj0.stocks.reliance  = "FINNIFTY"
// console.log(newObj0);
// console.log(obj0);


//REST OPERATORS------>This is used for combine multiple arugments in to an itratable array 

// let arr = [1,2,3,4,5,6,8]

// let [a,b, ...rest] = arr
// console.log(a);
// console.log(b);
// console.log(rest);

//JSON.stringify()-----To convert object data into JSON formet data

// const obj0 = [{ index0: "NIFTY50", spot0: 19700 , stocks:{reliance:3400,tata:230}}];
// console.log(obj0);

// console.log("CONVERTED JSON DATA"+ JSON.stringify(obj0));
// const parsed = JSON.parse(JSON.stringify(obj0))
// console.log(parsed);


//RECURSION

// let array = [1,2,4,,5,7,8,9,10,33]

// const arrar1 = array.forEach(element => {

//     if(element == 33){
//         return element;
//     }
//     return element;
    
    
// });

// console.log(arrar1);

//MEMOIZATION ------>Memoization is an thechnique which can used for optimize the function more efficienty by built in feature closure

// function memoizedFunction() {
//     const cache = {};
//     return function (n) {
//       if (n in cache) {
//         console.log('Fetching from cache');
//         return cache[n];
//       } else {
//         console.log('Calculating result');
//         const result = n * 2;
//         cache[n] = result;
//         return result;
//       }
//     };
//   }
  
//   const memoized = memoizedFunction();
//   console.log(memoized(5)); // Output: Calculating result, 10
//   console.log(memoized(5)); // Output: Fetching from cache, 10

  
function outerFunction(){
    const cache = {};
    return function(e){
        if(e in cache){
            return cache[e]
        }
        else{
            let result = e*2 ;
            cache[e]=result;
            return result;
        }
    }
};

const newFuction = outerFunction();

console.log(newFuction(5));
console.log(newFuction(5));


let arr = [1,2,300,400,500,6,7,8]

// function new1(){
//     if (let n of arr){
//         return 2;
//     }

// }
// console.log(new1());


// for( 8 in arr ){
//     console.log(9000);
// }

// const cache = {};
// cache[2] = 20
// cache[3] = 33
// console.log(cache);

// RECURSION---------->The thing which is executed until the certain condition met



