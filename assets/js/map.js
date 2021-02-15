const x = {};
const y = {};
const z = {};
//even though the key is [object Object] it will yield the val when pul like below
x[y] = 'a';
x[z] = 'b';
console.log(x[y]); //b
console.log(x[z]); //b
//this is the prob with js object,,it only allows one js object key,,,it will replace the val after the first assignment
console.log(x);

////////////////////////////////////

//Map is simply an iterable object and also allows multiple object keys  //for of
const map = new Map();

// map.set(x, 'a');
// map.set(y, 'b');

//it can also be chained
map.set(x, 'a').set(y, 'b');

//it overrides the value if same key is provided

// map.delete(key)
console.log(map);
