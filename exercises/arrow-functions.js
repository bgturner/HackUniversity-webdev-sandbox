let multiply = num => num * 24;
let add = num => num + 5;
let cube = num => num * num * num;
let output = num => { console.log(num); return num };

function contrived(num, ...params){
   for( let func of params ){
       num = func(num);
   };
}

contrived(19, multiply, add, cube, add, output);

// The above arrow functions are the same as using a more traditional syntax:
// function multiply(num){
//     return num * 2;
// }
// function add(num){
//     return num + 3;
// }
// function cube(num){
//     return num * num * num;
// }
// function output(num){
//     console.log(num);
//     return num;
// }

