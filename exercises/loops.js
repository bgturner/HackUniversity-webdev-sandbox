// The many faces of for loops!
//
// Basically, there are:
// * The original
// * newish 'foreach' (has to iterate over all items, ie can't break out)
// * 'for-in' - iterate over each key
// * 'for-of' - iterate over each value
//

let myArray = ['one','two','three','four'];

console.log('Following examples use this array:\n');
console.log('let myArray = ["one","two","three","four"];\n');

// *********************************************************************************
// Example of original
// *********************************************************************************

console.log('Original For Loop\n');

for( let i = 0; i < myArray.length; i++ ){
	console.log(myArray[i]);
}


// *********************************************************************************
// 'foreach'
// *********************************************************************************

console.log('\nNewish ForEach\n');

myArray.forEach( function(value){
	console.log(value);
});


// *********************************************************************************
// 'for-in'
// *********************************************************************************

console.log('\nFor-In Loop (iterates over keys)\n');

for( let key in myArray ) {
	console.log(key);
}

// *********************************************************************************
// 'for-of'
// *********************************************************************************

console.log('\nFor-Of Loop (iterates over values)\n');

for( let value of myArray ){
	console.log( value );
}


// *********************************************************************************
// Exercise in class
// *********************************************************************************

console.log('\nI like commas exercise.\n');

let addComma = "ireallylikecommas";
let newString ='';

for( let value of addComma ){
   newString += value + ',';
}
console.log(newString);

