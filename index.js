function apply(num, f) {
	return f(num);
}

// arrow function
console.log(apply(5, (num) => {
	return num * 2;
}));

// arrow function which works same as above
console.log(apply(5, (num) => num * 2)); 
