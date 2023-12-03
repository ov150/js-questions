  //console.trace()

// function grandGrandParent(){
//     console.log("grand Grand Parent");
//     grandParent();
// }

// function grandParent(){
//     console.log("grand parent");
//     parent();
// }
// function parent(){
//     console.log("parent");
//     child();
// }
// function child(){
//     console.log("child");
//     innerChild();
// }
// function innerChild(){
//     console.trace()
// }


// grandGrandParent();




//array 

//const arr = ["a", "b", "c"];
// arr.unshift("z");  //1 method
// arr.splice(0,0,"z"); //2 method
// let arr = ["a", "b", "c"];
// arr = ["z", ...arr]; //3 method
//console.log(arr);


//merged arrays

// const marks = [1,2,3];
// const rollNum = [4,5,6];

// const megred = marks.concat(rollNum); //1 method
// const megred = [...marks, ...rollNum]; //2 method
// console.log(megred);

 
// ++vs +1

// let age = "51";
// let validAge = "51";
// age = age+1;
// validAge++;
// console.log(age);  //511
// console.log(validAge); //52

// function plusplus(num){
//     return Number(num) + 1;
// }



//console.log(!+[]+[]+![]);

//add two number without plus operator
// const num1 = 90;
// const num2 = 100;
// const result = num1 - -num2;
// console.log(result);

//numeric seprator
// const num1 = 1000000000;
// const num2 = 10_000_00_000;

// console.log(num1 === num2);


//find the execution time of a program

// let i = 0;
// const beforeTime = new Date().getTime(); //2 method
// console.time("X"); //1 method
// while(i<1000000){
//     i++;
// }
// console.timeLog("X"); //1 method
// const afterTime = new Date().getTime(); //2 method
// console.log(afterTime-beforeTime); //2 method

//some function(any one true)
// const arr = [
//     {
//         id: 31, 
//         marks:31
//     },
//     {
//         id: 32, 
//         marks:66
//     },
//     {
//         id: 33, 
//         marks:66
//     },
// ]

// const PASSING_MARKS = 33;
// const isFaild = arr.some(function(element){
//     return element.marks < PASSING_MARKS;
// })

// console.log(isFaild);


// every() all true
// const arr = [
//     {
//         id: 31, 
//         marks:34
//     },
//     {
//         id: 32, 
//         marks:66
//     },
//     {
//         id: 33, 
//         marks:66
//     },
// ]

// const PASSING_MARKS = 33;
// const isFaild = arr.every(function(element){
//     return element.marks > PASSING_MARKS;
// })

// console.log(isFaild);


// function show(){
//     console.log('WOW');
// }
// const functionName = 'show';
// console.log(window.show);
// console.log(window[functionName]());

// NaN using switch case
// const value = NaN;

// switch(value){
//     case NaN: console.log("NaN matched"); break;
//     default: console.log("match failed");
// }

// find function

// const arr = [{id:91, name:'B'},
//              {id:18, name:'C'},
//              {id:90, name:'D'}]
// const result = arr.find(checker) || {};
// function checker(data){
//     return data.id === 18;
// }
// console.log(result);


// function isValid(age){
//     if(age){
//         let x;
//         var varMesg = 'valid';
//     }
//     console.log(varMesg);
// }
// isValid(21);


//find last element in array
// const arr = ['B','S','Y','P']; 
// console.log(arr[arr.length-1]);//1 method
// console.log(arr.at(-1)); //2 method


// const num1 = Number();
// const num2 = Number(undefined);
// console.log(`num1 = ${num1}`);  //0
// console.log(`num2 = ${num2}`); // NaN


//ifey 

// !function(){
//     console.log("function called..");
// }();

// console.log(0 == "0"); //true
// console.log(0 == []);  //true
// console.log("0" == []); //false


// const superHero = {
//     name: 'SilverSurfer'
// }
// const collector = {
//     planet: 'Xandar'
// }

// console.log(collector.name);


// console.log(1);

// new Promise(function(res){
//   console.log(2);
// })

// console.log(3);

// output : 1 
            2
            3


//solution

// console.log(1);

// function task(){
//   return new Promise(function(res){
//     console.log(2);
//   })
// }
// console.log(3);
// task();



// const getData = () =>{
//   console.log(this);
// };

// const obj = {user:1};
// getData.call(obj);


// var god = {
//   slogan:'Jai Shree Ram'
// }

// var god2 = Object.create(god);
// delete god2.slogan;

// console.log(god2.slogan);
// console.log(Object.keys(god2));




// function check(){
//   throw new Error("Param required");
// }

// function show(name = check()){
//   console.log(name);
// }

// show();



// const a = "81";
// switch(a){
//   case 81: console.log("=="); break;
//   case "81": console.log("==="); break;
//   default: console.log(":)");break;
// }


// const key = "constructor";
// const obj = {};
//if(obj.hasOwnProperty(key)) or
// if(obj[key]){
//   console.log("Hello Admin");
// }else{
//   console.log("Hello Guest");
// }

// if(key in obj){
//   console.log("Hello Admin");
// }else{
//   console.log("Hello Guest");
// }


//break for each loop
const arr = [1,2,3,4];
// arr.forEach(function(value){
//   if(value==2){ 
//     return;
//   }
//   console.log('value = ', value);
// });

// 1 method

// arr.forEach(function(value){
//   if(value==2){ 
//     throw new Error("Message");
//   }
//   console.log('value = ', value);
// });

//2 method

// arr.forEach(function(value){
//   if(value==2){ 
//     arr.length = 0;
//   }
//   console.log('value = ', value);
// });

//3 method

// arr.forEach(function(value, index){
//   if(value==2){ 
//     arr.splice(index+1, arr.length);
//   }
//   console.log('value = ', value);
// });


//boxing
// const age = 21;
// const str = "JS";
// const isValid = true;

// console.log(age.toString());
// // console.log(undefined.toString());
// // console.log(null.toString());
// console.log(str.toLocaleLowerCase());
// console.log(isValid.toString);

// new String(str);
// new Number(age);
// new Boolean(isValid);


// const str = "hare krishna hare krisna krishna krishna hare hare";

// const obj = {};

// for(let x of str){
//   if(obj[x]){
//     obj[x] += 1;
//   }else{
//     obj[x]=1;
//   }
// }

// console.log(obj);


// const a = 10;
// const b = 20;
// const add = new Function('a', 'b', 'console.log(a+b);')
// add(10,20);

// const str = "a.b.c.d.e";
// str.split(".").reduceRight(function(acc, next){
//     return {[next] : acc};
// });




// function amIAPureFunction(){

// }
// console.log(amIAPureFunction());

// function add(n1,n2){
//   return n1+n2;
// }
// console.log(add(2,3));



// console.log(-0==0);
// console.log(-0===0);
// console.log(Object.is(0,-0));


const obj = {};

Object.defineProperty(obj, "lang", { value:"JS"});
console.log(obj);
console.log(obj.lang);

