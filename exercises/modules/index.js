import calc from './myModule';

console.time('bad');
let array = []
for (let i = 1; i <= 100; i++)
{
    array = [...array, i]
}
let myNum = calc.add(...array);
myNum = calc.sub(myNum, 10);
myNum = calc.exp(myNum, 2);
console.timeEnd('bad');
console.log(myNum);



// Note that the above does work, however it is inefficient.  Basically we are
// creating an array of numbers from 1 to 100. We then use the spread operator to
// deconstructed that array. Then in the module, it is re-constructing the params
// only to iterate over the array.  Instead we sould simply loop through a
// bunch of addition calls, with only two parameters like so:

console.time('better');
let efficientNum = 0;
for( let i = 1; i <= 100; i++ ){
    efficientNum = calc.add(efficientNum, i);
}
efficientNum = calc.sub(efficientNum, 10);
efficientNum = calc.exp(efficientNum, 2);
console.timeEnd('better');
console.log(efficientNum);

// all that being said, they are both in the <= 1ms realm ;)

