function apply(num, f) {
	return f(num);
}

// arrow function
console.log(apply(5, (num) => {
	return num * 2;
}));

