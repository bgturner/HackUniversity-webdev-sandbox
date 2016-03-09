// *************************************************************************************
// Generators are like functions that have multiple returns identified by the
// 'yield' word.
// *************************************************************************************


console.log('\nExample from Class\n');
// Output fibonacci numbers using a generator (from class)
function *fib(){
	let a = 0;
	yield a;

	let b = 1;
	yield b;

	while(true) {
		let c = a + b;
		a = b;
		b = c;
		yield c;
	}

}
// Instantiate the above generator
let fibGen = fib();
for( let i = 0; i < 10; i++ ){
	// the first time this is called, it will stop at the first yield.
	// The second time will be the next yield
	// Basically each new 'yield' with the various variables will be created with the below 'next' method
   console.log(fibGen.next().value);
}

// *************************************************************************************
// I had a lot of trouble grasping this (probably still don't fully
// understand). There is an example on Mozilla's "for-of" page:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//
// And then the actual 'Generators' pages on Mozilla:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
//
// *************************************************************************************
console.log('\nExample from Mozilla\n');

function* fibonacci(){
	let [prev, curr] = [0,1];
	while (true) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for ( let n of fibonacci()) {
	console.log(n);
	if (n >= 1000) {
		break;
	}
}

