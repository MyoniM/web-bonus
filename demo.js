const ob = {
	age: 90,
};
console.log(Reflect.getPrototypeOf(ob));
//It returns the value of the internal [[Prototype]] property of the specified object.

// Reflect.setPrototypeOf(target, prototype)   true or false

// It can change an object's [[Prototype]] to null.
// Reflect.setPrototypeOf({}, null)  // true
